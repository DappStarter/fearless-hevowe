require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid climb frame sugar fire ridge remember arrow island knife sun gesture'; 
let testAccounts = [
"0xb47e5dc7624c37615190c0bce1991c5feacf687a81b550ba41f898208f334cab",
"0x45faf76a83fdd957cc3e0816f9c7e573dd7fc60508ba5f84dfa8f02cac06ae46",
"0xb5aee86deba59059ed3d0217365f03c6c7093ea93583c47045bf1dd84efdbc22",
"0xf8e9f2d640f8c28d11f1ede456071125b751a281ef93e4d3d57e7b36218b2e64",
"0x40e24f2a6d62be30cf230678f4aa78850182c8087d02013367aecbbd9017e523",
"0xc21b1a54e94cbcaf1b854cc3008713cac790e6cf0ccd1a4bea1b5f448462b916",
"0x4e395b518d74abcd23deb72d9af8522accb6a81c6b736dd13aeeee47bff57af1",
"0xf458de3fa5775e6a4987ca0cbb5be3c94b77596344079dc500359c5902cd9665",
"0xa509ac1280013abdd9f2f55908c20515fd137cab22755f91758a6d18725f9548",
"0xa7789a561d8daf03b69a60f22710081e00849f96a631bd398100cd6fca38fe38"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

