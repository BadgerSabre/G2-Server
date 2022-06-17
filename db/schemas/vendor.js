const mongoose = require('mongoose')

const vendorSchema = {
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
    contact_phone: {
        type: String,
    },
    vmi_inventory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
    }]
}

module.exports = mongoose.model('Vendor', vendorSchema)