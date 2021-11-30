const express = require('express');
const bodyParser = require('body-parser');
const event = require('./controllers/event_controller')
// const dbconnection = require('./utils/datatabase');

//
app = express();
const api_version = '/sc-deploy';
const port = 5000;

app.use(bodyParser.urlencoded({ extended:true }) );
app.use(bodyParser.json({limit: "100mb"}));
app.use(`${api_version}`, require('./routers/router'));
// subcribe events
event.subscribeLogEvent("setWhiteListStatus");
event.subscribeLogEvent("removeWhiteListStatus");
//
app.listen(port, () => {
    console.log(`Listing at: ${port}`);
});

// dbconnection.connectDB();