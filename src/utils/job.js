const cron = require('node-cron');
const emailService  = require('../services/email-services');
const sender = require('../config/email-config')

const setupJob = () => {
  cron.schedule('*/1 * * * *', async() => {
      const response = await emailService.fetchPendingEmail();
      response.forEach((email)=> {
          sender.sendMail({
              from: 'support@admin.com',
              to: email.recipientEmail,
              subject: email.subject,
              text: email.content
          }, async(err, data) => {
              if(err){
                  consolele.log(error)
              }else{
                  console.log(data);
                  await emailService.updateTicket(email.id, {status: 'SUCCESS'});
              }
          });
      })
      console.log(response);
  })
}


module.exports= setupJob; 