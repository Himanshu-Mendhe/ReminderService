const TicketService = require('../services/email-services');
// creating Notification

const create = async(req,res) => {
    try {
        const ticket = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: ticket,
            message: 'successfully registered email reminder',
            success: true,
            err: {}
    })
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'unable to register an email reminder',
            success: false,
            err: error
        })
    }
}
 
module.exports = {
    create
}