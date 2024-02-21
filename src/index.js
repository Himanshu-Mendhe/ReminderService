const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server-config');

const cron = require('node-cron');
//const {sendBasicEmail} = require('./services/email-services')

const SetupAndStartServer = () => { 
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`server started on port __${PORT}__`);
        /*
        sendBasicEmail(
            '"Support"<support@admin.com>',
            'mendhehimanshu20@gmail.com',
            'this is a testing email',
            'This is testing of email npm package. Hopefully it reached you'
            
        );
        */
        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every two minutes');
          })
    });
}

SetupAndStartServer();
