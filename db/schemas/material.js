const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    material: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
    },
    num_required: Number,
    job_ref: String
})

module.exports = mongoose.model('Material', materialSchema)