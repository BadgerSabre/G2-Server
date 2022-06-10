const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        unique: true
    },
    contact_name: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    shipping_address: {
        type: String,
        required: true
    },
    contact_phone: {
        type: String,
    },
    purchases: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    pending_opportunities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Opportunity"
    }]

})

module.exports = mongoose.model('Customer', customerSchema)