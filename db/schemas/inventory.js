const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    pid: {
        type: Number,
        unique: true,
        required: true
    },
    inStock: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    vmi: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)