require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name remember nominee clump include cloth flame toss'; 
let testAccounts = [
"0x007286caf670aa3c885298b80bce48bec54a6fdc9679c07f63224e1a3365892a",
"0xc09ef273f042415744cf03ad2fd0288944063f4960c96fa143768f3399110f3e",
"0xf986eecdb40be512da25a377a7ad451c21d7342f0eab10abe0ede1911060bfe0",
"0x1fab1680d2ed09097e929fe24686139b6a3240c27ed450a3e98732e94234f93f",
"0x0a2788df807167e76f5dc3a458c12d35d7adfc959c0e2c22e960080e1faf88aa",
"0xf95d02acfb94456cbb0fab3ada51384e562567a361c24bb8ffaefe90b5bbb7d4",
"0x44d7741a15c94a1a4db03522129e33e342185409f5b50a9e0b64cbc40e25f92b",
"0x2f84d03e829936cbad12c53bd3ffc4a9175bb7561b9515ba29b138aee907f5de",
"0x292ec7796d3c7e22b0613dd2cee7e76c4ad87da35dcb12e5a19340942e40e94e",
"0x99c4d6f8489140c5fdf273e6e4f8e3cf03ec16afadb77947ae4748ad0e59e3c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
