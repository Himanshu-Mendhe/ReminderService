const express = require('express');
const bodyParser = require('body-parser');
const TIcketController = require('./controllers/ticket-controller')
const EmailService = require('./services/email-services');

const {PORT} = require('./config/server-config');

const { subscribeMessage, createChannel } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/server-config')

const jobs = require('./utils/job');
//const {sendBasicEmail} = require('./services/email-services')

const SetupAndStartServer = async() => { 
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets', TIcketController.create)

    const channel = await createChannel() ;
    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

    app.listen(PORT, () => {
        console.log(`server started on port __${PORT}__`);
        //jobs();
        /*
        sendBasicEmail(
            '"Support"<support@admin.com>',
            'mendhehimanshu20@gmail.com',
            'this is a testing email',
            'This is testing of email npm package. Hopefully it reached you'
            
        );
        */
    });
}

SetupAndStartServer();
