const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter event name"]
    },
    id: {
        type: String,
        required: [true, "Enter event id"]
    },
    usersList: {
        type: Array
    },
    totalEntry :{
        type: Number
    }
})

module.exports = mongoose.model('eventModel', eventSchema)
