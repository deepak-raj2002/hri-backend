const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId:  {
        type: String,
        required: true
    },
    shopId: {
        type: String,
        required: true
    },
    subdomain: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        default: 'Normal'
    },
    date: {
        type: Date,
        default: Date.now
    },
    orders: [{orderId: String, productId: String}]
})

module.exports = mongoose.model('User', UserSchema)