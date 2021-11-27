const Web3 = require('web3');


const nft = require("../contracts/NFT.json");

const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
const abi = nft.abi;
const sc_addr = '0xA21c9c0d283Dc95E99e9C835b7b423a142456C6d';

contract = new web3.eth.Contract(abi, sc_addr);

// get owner SC
async function owner(){
    try{
        let owner = await contract.methods.owner().call();
        return owner;
    }catch(error){
        return error.data;
    }
}
//
async function setWhiteList(user_address, from){
    try{
        let result = await contract.methods.setWhiteList(user_address).send({from: from});

        return result;
    }catch(error){

        console.log("Set whiteList ERROR: ", error.data)
        return error.data;
    }
}
// async
async function removeWhiteList(user_address){
    try {
        let result = await contract.methods.removeWhiteList(user_address).send({from: from});

        return result;
    } catch (error) {
        console.log("Remove whiteList ERROR: ", error.data)
    }
}
// count whitelist member
async function countWhiteList(){
    try{
        let counter = await contract.methods.wlCounter().call();
        return counter;
    }
    catch(error){
        console.log(error);
    }
}
//
async function safeMint(to, tokenId, metadata)
    {
    try{
        let mint = contract.methods.safeMint(to, metadata.tokenId, metadata.name, metadata.price, metadata.power)
                    .send({from: from, gas: 5000000});
        return mint;
    }
    catch(error){
        console.log("ERROR: ", error.data);
    }

}

async function updateNFT(tokenId, new_metadata){

}
//
async function setBanList(user_address){

}
// 
async function unBan(user_address){

}
// transfer
async function transfer(from, to, tokenId){

}

module.exports = {
    owner,
    setWhiteList,
    removeWhiteList,
    countWhiteList,
    safeMint,
    updateNFT,
    setBanList,
    unBan,
    transfer
}
