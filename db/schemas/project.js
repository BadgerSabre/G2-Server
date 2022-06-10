const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["In Design", "Review", "In Production", "In Shipping", "Shipped"],
        default: "In Design"
    },
    ship_date: {
        type: Date
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        },
        num_ordered: Number
    }]
})

module.exports = mongoose.model('Project', projectSchema)