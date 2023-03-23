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

        console.log(assetTOML.STOCKS);

        res.send('Hello');
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