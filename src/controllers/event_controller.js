const BaseInteractive = require('./base');

class SCEvent extends BaseInteractive{
    constructor(){
        super();
        this.subscribedEvents = {};
    }
    //
    getSignature(event_name){
        const events = this.getEvents();
        for(var event in events){
            if(events[event].name == event_name){
                return event;
            }
        }

        return null;
    }
    //
    subscribeLogEvent(event_name){
        const eventSignature = this.getSignature(event_name);
        if(eventSignature != null){
            const subscription = this.web3.eth.subscribe('logs',{
                address: this.contract.options.address,
                topics: [eventSignature] }, (error, result) => {
                if (!error) {

                    console.log(`Result '${event_name}' event: `, result)
                }
                else{
                    console.log(`Error '${event_name}' event: `, result)
                }
            })
            this.subscribedEvents[event_name] = subscription;
        }
        else{
            console.log("Can't get Event Signature !")
        }
        
        console.log(`Start subscribed to event '${event_name}' of contract '${this.contract.options.address}' `)
    }

    //
    unsubscribeLogEvent(event_name){
        this.subscribedEvents[event_name].unsubscribe(function(error, success){
            if(success)
                console.log(`Successfully unsubscribed '${event_name}'!`);
        });
    }

}
// sce = new SCEvent();
// sce.subscribeLogEvent("setWhiteListStatus");

module.exports = new SCEvent();

    