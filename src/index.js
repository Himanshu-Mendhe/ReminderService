const express = require('express');
const bodyParser = require('body-parser');
const TIcketController = require('./controllers/ticket-controller')

const {PORT} = require('./config/server-config');

const jobs = require('./utils/job');
//const {sendBasicEmail} = require('./services/email-services')

const SetupAndStartServer = () => { 
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets', TIcketController.create)

    app.listen(PORT, () => {
        console.log(`server started on port __${PORT}__`);
        jobs();
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
