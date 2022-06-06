const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    required_jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }]
})

// Virtuals -> required_parts, estimated_time, estimated_price

module.exports = mongoose.model('Product', productSchema)