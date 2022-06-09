const mongoose = require('mongoose')

const opportunitySchema = new mongoose.Schema({
    quote: {
        type: String,
        default: "No Quote"
    },
    project_number: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    },
    year: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["Lead", "Quote Sent", "Won", "In Production", "Revenue Taken"],
        default: "Lead"
    },
    project_manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
    },
    sales_person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        required: true
    },
    state: {
        type: String,
        required: true
    },
    revenue: {
        type: Number
    },
    ship_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Opportunity', opportunitySchema)