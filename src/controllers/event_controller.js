const BaseInteractive = require('./base');

class SCEvent extends BaseInteractive{
    constructor(abi, sc_addr){
        super(abi, sc_addr);
    }
}

module.exports = new SCEvent();