const path = require('path');
const fs = require('fs');

const BT_ISSUERS = [
    "GDRM3MK6KMHSYIT4E2AG2S2LWTDBJNYXE4H72C7YTTRWOWX5ZBECFWO7"
];

const USD_ASSETS = [
    { type: "credit_alphanum4", 
      code: "USDC", 
      issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN" 
    },
];

const HORIZON_INST = "https://horizon.stellar.org";
const MAX_SEARCH = "limit=200";

const STREET_NAME_ACCOUNTS = [
    "GAQKSRI4E5643UUUMJT4RWCZVLY25TBNZXDME4WLRIF5IPOLTLV7N4N6" // Cede & Co.
];

const MICR_DIR = path.join(__dirname, "../../master-identity-catalog-records");

const MICR_TXT = MICR_DIR + "/master-identity-account-mapping.txt";

module.exports = { BT_ISSUERS, USD_ASSETS, 
                   HORIZON_INST, MAX_SEARCH, 
                   STREET_NAME_ACCOUNTS, MICR_TXT };