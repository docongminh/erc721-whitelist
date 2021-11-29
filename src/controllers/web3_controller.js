const Web3 = require('web3');


const nft = require("../contracts/NFT.json");

const abi = nft.abi;
const sc_addr = '0x5A711DEf3284E98776F0755eD339C20FC203f036';

class SCInteractive{

    constructor(abi, sc_addr){
        const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
        this.contract = new web3.eth.Contract(abi, sc_addr);
    }

    // get owner SC
    async owner(req, res){
        try{
            let owner = await this.contract.methods.owner().call();
            let message = {
                "message": "success check owner",
                "body": owner
            }
            return res.send(message);
        }catch(error){
            let message = {
                "message": "error check owner",
                "body": error
            }
            return res.send(message);
        }
    }
    //
    async balanceOf(req, res){
        try{
            const user_address = req.body.user_address;
            let owner = await this.contract.methods.balanceOf(user_address).call();
            let message = {
                "message": "success get balance",
                "body": owner
            }
            return res.send(message);
        }catch(error){
            let message = {
                "message": "error get balance",
                "body": error
            }
            return res.send(message);
        }
    }
    //
    async setWhiteList(req, res){
        try{
            const user_address = req.body.user_address;
            const from = req.body.from;
            let result = await this.contract.methods.setWhiteList(user_address).send({from: from});
            let message = {
                "message": "success set whitelist",
                "body": result
            }
            return res.send(message);
        }catch(error){
            let message = {
                "message": "error set whitelist",
                "body": error.data
            }
            return res.send(message);
        }
    }
    // async
    async removeWhiteList(req, res){
        try{
            const user_address = req.body.user_address;
            const from = req.body.from;
            let result = await this.contract.methods.removeWhiteList(user_address).send({from: from});
            let message = {
                "message": "success remove whitelist",
                "body": result
            }
            return res.send(message);
        }catch(error){
            let message = {
                "message": "error remove whitelist",
                "body": error.data
            }
            return res.send(message);
        }
    }
    // count whitelist member
    async countWhiteList(req, res){
        try{
            let counter = await this.contract.methods.wlCounter().call();
            let message = {
                "message": "success get number of whitelist member",
                "body": counter
            }
            return res.send(message);
        }
        catch(error){
            let message = {
                "message": "error count whitelist",
                "body": error.data
            }
            return res.send(message);
        }
    }
    //
    async safeMint(req, res){
        try{
            const to = req.body.to;
            const from = req.body.from;
            const metadata = req.body.metadata;
            let mint = await this.contract.methods.safeMint(to, metadata.tokenId, metadata.name, metadata.price, metadata.power)
                        .send({from: from, gas: 5000000});
            let message = {
                "message": "success mint nft",
                "body": mint
            }

            return res.send(message);
        }
        catch(error){
            let message = {
                "message": "error mint nft",
                "body": error
            }
            return res.send(message);
        }

    }

    async updateNFT(req, res){
        try{
            const from = req.body.from;
            const metadata = req.body.metadata;
            let mint = await this.contract.methods.updatenft(metadata.tokenId, metadata.name, metadata.price, metadata.power)
                        .send({from: from, gas: 5000000});
            let message = {
                "message": "success update nft",
                "body": mint
            }

            return res.send(message);
        }
        catch(error){
            let message = {
                "message": "error update nft",
                "body": error
            }
            return res.send(message);
        }
    }
    //
    async setBanList(req, res){
        try{
            const user_address = req.body.user_address;
            const from = req.body.from;
            let result = await this.contract.methods.setBanList(user_address).send({from: from});
            let message = {
                "message": "success set banlist",
                "body": result
            }
            return res.send(message);
        }catch(error){
            let message = {
                "message": "error set banlist",
                "body": error.data
            }
            return res.send(message);
        }
    }
    // 
    async unBan(req, res){
        try{
            const user_address = req.body.user_address;
            const from = req.body.from;
            let result = await this.contract.methods.unBanList(user_address).send({from: from});
            let message = {
                "message": "success unban",
                "body": result
            }
            return res.send(message);
        }catch(error){
            let message = {
                "message": "error unban",
                "body": error.data
            }
            return res.send(message);
        }
    }
    // transfer
    async transfer(req, res){
        try{
            const from = req.body.from;
            const to = req.body.to;
            const tokenId = req.body.tokenId;
            let result = await this.contract.methods.transferFrom(from, to, tokenId).send({from: from});
            let message = {
                "message": "success transfer",
                "body": result
            }
            return res.send(message);
        }catch(error){
            console.log(error)
            let message = {
                "message": "error transfer error",
                "body": error
            }
            return res.send(message);
        }

    }
}    

module.exports = new SCInteractive(abi, sc_addr);
