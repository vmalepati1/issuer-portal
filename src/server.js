const express = require('express');
const cors = require('cors');
const app = express();
const dcent = require('dcent-cli-connector');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) =>
    fetch(...args));
const toml = require('toml');
const { BT_ISSUERS } = require('./globals');

app.use(cors());

dcent.initialize();

app.get('/asset-classes/:assetCode', async (req, res) => {
    try {
        let response = [];
        
        const assetTOML = await getAssetTOML(req.params.assetCode);

        const stocks = assetTOML.STOCKS;

        for (let i in stocks) {
            let stock = stocks[i];

            response.push({ companyName: assetTOML.ISSUER.name, code: stock.code, class: stock.class, par: stock.par});
        }

        res.send(JSON.parse(JSON.stringify(response)));
    } catch(err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

app.get('/asset-stats/:assetCode', async (req, res) => {
    try {
        let response = [];

        let sharesInDTC = await getFederationResolvedBalance('cede*blocktransfer.io', req.params.assetCode);
        let treasuryShares = await getFederationResolvedBalance(req.params.assetCode + '*treasury.holdings', req.params.assetCode);

        let assetAddr = await getAssetAddress(req.params.assetCode);

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

        let dsppShares = await getFederationResolvedBalance(req.params.assetCode + '*authorized.DSPP.holdings', req.params.assetCode);
        let pendingIPOShares = await getFederationResolvedBalance(req.params.assetCode + '*initial.offering.holdings', req.params.assetCode);
        let regAShares = await getFederationResolvedBalance(req.params.assetCode + '*reg.a.offering.holdings', req.params.assetCode);
        let regCFShares = await getFederationResolvedBalance(req.params.assetCode + '*reg.cf.offering.holdings', req.params.assetCode);
        let privatePlacementShares = await getFederationResolvedBalance(req.params.assetCode + '*reg.d.offering.holdings', req.params.assetCode);
        let shelfShares = await getFederationResolvedBalance(req.params.assetCode + '*shelf.offering.holdings', req.params.assetCode);

        let reservedShares = dsppShares + pendingIPOShares + regAShares + regCFShares + privatePlacementShares + shelfShares;

        const assetTOML = await getAssetTOML(req.params.assetCode);

        let stock = assetTOML.STOCKS.find((s) => s.code == req.params.assetCode);

        let authorizedShares = stock.authorized;

        let shares = parseFloat(assetData.liquidity_pools_amount);

        for (let classifiers in assetData.balances) {
            let balances = assetData.balances[classifiers];

            shares += parseFloat(balances);
        }
        
        shares += parseFloat(assetData.claimable_balances_amount);

        let outstandingShares = shares - treasuryShares - reservedShares;

        res.send(JSON.parse(JSON.stringify({ sharesInDTC: sharesInDTC, 
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
                                             outstandingShares: outstandingShares })));
    } catch(err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

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

    const accountDataResp = await fetch(
        'https://horizon.stellar.org/accounts/' + addr);

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
    let requestAddr = 'https://horizon.stellar.org/assets?asset_code=' + queryAsset + '&asset_issuer=';

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

    return 'https://horizon.stellar.org/assets?asset_code=' 
                + queryAsset + '&asset_issuer=' + issuer;
}

app.use('/login', async (req, res) => {
    var coinType = dcent.coinType.STELLAR;

    // getAddress(coinType, "m/44'/0'/0'/0/0")
    await dcent
        .getAddress(coinType, "m/44'/0'/0'/0/0")
        .then(
            response => {
                console.log("Hello");
                console.log(response);
            }
        ).catch(error => {
            console.log("Authentication error:", error);
        });

    res.send({
        token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on port 8080'));