const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const eventModel = require('../models/eventDetails')

const register = async (req, res) => {
    // const token = req.header("x-auth-token");
    // const event = req.header("event");
    try {
        const token = req.body.token;
        const event = req.body.event;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const eventDetails = await eventModel.findOne({ name: event });
        eventDetails.usersList.push(decoded);
        await eventDetails.save();
        res.status(200).send("okay,resgistered");
    }
    catch (err) {
        console.log(err);
    }
}

const scanQr = async (req, res) => {

    const token = req.body.token;
    const event = req.body.event;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    try 
    {
        const user = await eventModel.event.usersList.findOne({ decoded });
        const total = await eventModel.event.totalEntry + 1;
        eventModel.event.totalEntry = await total;
        await eventModel.save();
        res.status(200).send("okay");
    }
    catch (err) 
    {
        res.status(401).send("Not Okay");
        console.log(err);
    }
}

module.exports = { register, scanQr };