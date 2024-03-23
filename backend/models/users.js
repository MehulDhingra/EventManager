const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'user name must be entered']
    },
    email: {
        type: String,
        required: [true, 'user mail id must be provided'],
    },
    number: {
        type: Number,
        required: [true, 'contact no is required '],
    },
    event: {
        type: String,
        enum: {
            values: ['V', 'C', 'A', 'B'],
            message: '{VALUE} is not supported',
        }
    }
})

module.exports = mongoose.model('userModel', userSchema)
