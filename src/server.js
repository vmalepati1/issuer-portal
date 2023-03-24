const express = require('express');
const cors = require('cors');
const app = express();
const dcent = require('dcent-cli-connector');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) =>
    fetch(...args));
const toml = require('toml');

app.use(cors());

dcent.initialize();

app.get('/asset-classes/:assetCode', async (req, res) => {
    try {
        let response = [];

        const apiEndpoint = 'https://blocktransfer.io/assets/' + req.params.assetCode + '.toml';

        const apiResponse = await fetch(apiEndpoint);

        let apiResponseTxt = await apiResponse.text();

        apiResponseTxt = apiResponseTxt.replace("desc.main", "desc-main");
        apiResponseTxt = apiResponseTxt.replace("desc.business", "desc-business");
        apiResponseTxt = apiResponseTxt.replace("desc.facilities", "desc-facilities");
        apiResponseTxt = apiResponseTxt.replace("desc.products", "desc-products");

        apiResponseTxt = apiResponseTxt.replace("ir.email", "ir-email");
        apiResponseTxt = apiResponseTxt.replace("ir.phone", "ir-phone");

        const assetTOML = toml.parse(apiResponseTxt);

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

        const omnibusAccountResp = await fetch(
            'https://stellarid.io/federation/?q=cede*blocktransfer.io&type=name');

        let omnibusJSON = await omnibusAccountResp.json();
        let omnibusAddr = omnibusJSON.account_id;

        const accountDataResp = await fetch(
            'https://horizon.stellar.org/accounts/' + omnibusAddr);

        let accountDataJSON = await accountDataResp.json();

        let sharesInDTC = 0;

        for (let i in accountDataJSON.balances) {
            let balance = accountDataJSON.balances[i];

            if (balance.asset_type.toUpperCase() == req.params.assetCode) {
                sharesInDTC += parseFloat(balance.balance);
                break;
            }
        }

        res.send(JSON.parse(JSON.stringify({ sharesInDTC: sharesInDTC })));
    } catch(err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

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