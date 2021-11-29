const Web3 = require('web3');
const nft = require("../contracts/NFT.json");


const abi = nft.abi;
const networkId = 5777;
// const sc_addr = '0x5A711DEf3284E98776F0755eD339C20FC203f036';
const sc_addr = nft.networks[networkId].address


class BaseInteractive{

    constructor(){
        const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
        this.contract = new web3.eth.Contract(abi, sc_addr);
    }
}

module.exports = BaseInteractive;