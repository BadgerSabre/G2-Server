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
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)