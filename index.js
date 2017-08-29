const axios = require('axios');
const v1sdk = require('v1sdk/dist/index');
const sdk = v1sdk.default;
const axiosConnector = v1sdk.axiosConnector;

const axiosConnectedSdk = axiosConnector(axios)(sdk);
const v1 = axiosConnectedSdk('my-host', 'my-instance')
    //.withCreds('v1User', 'v1Password');
    .withAccessToken('my-token');

v1.query({
    'from': 'Story', 
    'select':['Name']
}).then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});