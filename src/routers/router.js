const router = require('express').Router();
const {owner, balanceOf, setWhiteList, removeWhiteList,countWhiteList, safeMint, updateNFT, setBanList, unBan, transfer} = require('../controllers/web3_controller');


router.get('/owner', (req, res) => {return owner(req, res)});
router.get('/balance', (req, res) => {return balanceOf(req, res)});
router.post('/whitelist-set', (req, res) => {return setWhiteList(req, res)});
router.post('/whitelist-remove', (req, res) => {return removeWhiteList(req, res)});
router.get('/whitelist-counter', (req, res) => {return countWhiteList(req, res)});
router.post('/mint', (req, res) => {return safeMint(req, res)});
router.post('/mint-update', (req, res) => {return updateNFT(req, res)});
router.post('/banlist-set', (req, res) => {return setBanList(req, res)});
router.post('/banlist-unban', (req, res) => {return unBan(req, res)});
router.post('/transfer', (req, res) => {return transfer(req, res)});


module.exports = router;