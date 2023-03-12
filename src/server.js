const express = require('express');
const cors = require('cors');
const app = express();
const dcent = require('dcent-cli-connector')

app.use(cors());

dcent.initialize();

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