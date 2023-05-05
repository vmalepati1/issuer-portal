const express = require('express');
const cors = require('cors');
const app = express();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) =>
    fetch(...args));
const toml = require('toml');
const { BT_ISSUERS, HORIZON_INST, MAX_SEARCH } = require('./globals');
const { response } = require('express');

app.use(cors());

app.get('/asset-class-data/:assetCode', async (req, res) => {
    try {
        let response = [];
        
        const assetTOML = await getAssetTOML(req.params.assetCode);

        const stocks = assetTOML.STOCKS;

        for (let i in stocks) {
            let stock = stocks[i];

            let stats;

            // TODO: Fix below
            try {
                stats = await getAssetStats(assetTOML, stock.code);
            } catch(err) {
                console.log(err);
                continue;
            }

            response.push({ companyName: assetTOML.ISSUER.name, code: stock.code, 
                            class: stock.class, par: stock.par, stats: stats });
        }

        res.send(JSON.parse(JSON.stringify(response)));
    } catch(err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

app.get('/get-top-investors/:assetCode', async (req, res) => {
    let requestAddr = await getAssetAccountsAddress(req.params.assetCode);

    let ledger = await fetch(requestAddr);
    let ledgerJSON = await ledger.json();
    let ledgerBalances = [];

    let issuer = await getAssetIssuer(req.params.assetCode);

    while (ledgerJSON._embedded.records.length > 0) {
        for (let i in ledgerJSON._embedded.records) {
            let accounts = ledgerJSON._embedded.records[i];
            let account = accounts.id;

            for (let b in accounts.balances) {
                let balances = accounts.balances[b];

                if (!('asset_code' in balances) || !('asset_issuer' in balances)) {
                    continue;
                }

                if (balances.asset_code == req.params.assetCode 
                    && balances.asset_issuer == issuer) {
                    let balance = parseFloat(balances.balance);
                    
                    if (balance > 0) {
                        ledgerBalances.push({account_id: account, balance: balance});
                    }

                    break;
                }
            }
        }

        ledgerJSON = await getNextLedgerJSON(ledgerJSON);
    }

    ledgerBalances.sort((a, b) => {
        if (a.balance < b.balance) {
            return 1;
        }

        if (a.balance > b.balance) {
            return -1;
        }

        return 0;
    });

    res.send(ledgerBalances);
});

async function getAssetStats(assetTOML, assetCode) {
    let sharesInDTC = await getFederationResolvedBalance('cede*blocktransfer.io', assetCode);
    let treasuryShares = await getFederationResolvedBalance(assetCode + '*treasury.holdings', assetCode);

    let assetAddr = await getAssetAddress(assetCode);

    const assetResp = await fetch(assetAddr);
    let assetJSON = await assetResp.json();

    const assetData = assetJSON._embedded.records[0];

    let explicitRestrictedShares = parseFloat(assetData.claimable_balances_amount);

    let implicitRestrictedShares = 0.0;

    for (let classifiers in assetData.balances) {
        let balances = assetData.balances[classifiers];

        if (classifiers != 'authorized') {
            implicitRestrictedShares += parseFloat(balances);
        }
    }

    let restrictedShares = explicitRestrictedShares + implicitRestrictedShares;

    let dsppShares = await getFederationResolvedBalance(assetCode + '*authorized.DSPP.holdings', assetCode);
    let pendingIPOShares = await getFederationResolvedBalance(assetCode + '*initial.offering.holdings', assetCode);
    let regAShares = await getFederationResolvedBalance(assetCode + '*reg.a.offering.holdings', assetCode);
    let regCFShares = await getFederationResolvedBalance(assetCode + '*reg.cf.offering.holdings', assetCode);
    let privatePlacementShares = await getFederationResolvedBalance(assetCode + '*reg.d.offering.holdings', assetCode);
    let shelfShares = await getFederationResolvedBalance(assetCode + '*shelf.offering.holdings', assetCode);

    let reservedShares = dsppShares + pendingIPOShares + regAShares + regCFShares + privatePlacementShares + shelfShares;

    let stock = assetTOML.STOCKS.find((s) => s.code == assetCode);

    let authorizedShares = stock.authorized;

    let shares = parseFloat(assetData.liquidity_pools_amount);

    for (let classifiers in assetData.balances) {
        let balances = assetData.balances[classifiers];

        shares += parseFloat(balances);
    }
    
    shares += parseFloat(assetData.claimable_balances_amount);

    let outstandingShares = shares - treasuryShares - reservedShares;

    return { sharesInDTC: sharesInDTC, 
        treasuryShares: treasuryShares, 
        restrictedShares: restrictedShares,
        dsppShares: dsppShares,
        pendingIPOShares: pendingIPOShares,
        regAShares: regAShares,
        regCFShares: regCFShares,
        privatePlacementShares: privatePlacementShares,
        shelfShares: shelfShares,
        reservedShares: reservedShares,
        authorizedShares: authorizedShares,
        outstandingShares: outstandingShares };
}

async function getAssetTOML(assetCode) {
    const apiEndpoint = 'https://blocktransfer.io/assets/' + assetCode + '.toml';

    const apiResponse = await fetch(apiEndpoint);

    let apiResponseTxt = await apiResponse.text();

    apiResponseTxt = apiResponseTxt.replace("desc.main", "desc-main");
    apiResponseTxt = apiResponseTxt.replace("desc.business", "desc-business");
    apiResponseTxt = apiResponseTxt.replace("desc.facilities", "desc-facilities");
    apiResponseTxt = apiResponseTxt.replace("desc.products", "desc-products");

    apiResponseTxt = apiResponseTxt.replace("ir.email", "ir-email");
    apiResponseTxt = apiResponseTxt.replace("ir.phone", "ir-phone");

    const assetTOML = toml.parse(apiResponseTxt);

    return assetTOML;
}

async function getFederationResolvedBalance(federationAddr, assetCode) {
    const federationResp = await fetch(
        'https://stellarid.io/federation/?q=' + federationAddr + '&type=name');

    let federationJSON = await federationResp.json();
    let addr = federationJSON.account_id;

    let balance = await getAccountBalance(addr, assetCode);

    return balance;
}

async function getAccountBalance(addr, assetCode) {
    let shares = 0;

    const accountDataResp = await fetch(HORIZON_INST + '/accounts/' + addr);

    let accountDataJSON = await accountDataResp.json();

    for (let i in accountDataJSON.balances) {
        let balance = accountDataJSON.balances[i];

        if (balance.asset_type == assetCode) {
            shares += parseFloat(balance.balance);
            break;
        }
    }

    return shares;
}

async function getAssetIssuer(queryAsset) {
    let requestAddr = HORIZON_INST + '/assets?asset_code=' + queryAsset + '&asset_issuer=';

    for (let i in BT_ISSUERS) {
        let address = BT_ISSUERS[i];

        const assetIssuerResp = await fetch(requestAddr + address);
        let assetIssuerJSON = await assetIssuerResp.json();

        if (assetIssuerJSON._embedded.records.length > 0) {
            return address;
        }
    }

    throw new Error("Could not find asset " + queryAsset);
}

async function getAssetAddress(queryAsset) {
    let issuer = await getAssetIssuer(queryAsset);

    return HORIZON_INST + '/assets?asset_code=' 
                + queryAsset + '&asset_issuer=' + issuer;
}

async function getAssetAccountsAddress(queryAsset) {
    let issuer = await getAssetIssuer(queryAsset);

    return HORIZON_INST + '/accounts?asset=' + queryAsset 
            + ':' + issuer + '&' + MAX_SEARCH;
}

async function getNextLedgerJSON(ledgerJSON) {
    let nextAddr = ledgerJSON._links.next.href.replace(/%3A/g, ":").replace(/\u0026/g, "&");

    let response = await fetch(nextAddr);

    let responseJSON = await response.json();

    if (Object.keys(responseJSON).length 
            && responseJSON.hasOwnProperty("status") 
            && !responseJSON.status) {
        return await getNextLedgerJSON(ledgerJSON);
    } else {
        return responseJSON;
    }
}

app.use('/login', async (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on port 8080'));