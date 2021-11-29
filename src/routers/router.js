const router = require('express').Router();
const SC = require('../controllers/web3_controller');


router.get('/owner', (req, res) => {return SC.owner(req, res)});
router.get('/balance', (req, res) => {return SC.balanceOf(req, res)});
router.post('/whitelist-set', (req, res) => {return SC.setWhiteList(req, res)});
router.post('/whitelist-remove', (req, res) => {return SC.removeWhiteList(req, res)});
router.get('/whitelist-counter', (req, res) => {return SC.countWhiteList(req, res)});
router.post('/mint', (req, res) => {return SC.safeMint(req, res)});
router.post('/mint-update', (req, res) => {return SC.updateNFT(req, res)});
router.post('/banlist-set', (req, res) => {return SC.setBanList(req, res)});
router.post('/banlist-unban', (req, res) => {return SC.unBan(req, res)});
router.post('/transfer', (req, res) => {return SC.transfer(req, res)});


module.exports = router;