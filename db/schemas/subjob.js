const mongoose = require('mongoose')

const subjobSchema = new mongoose.Schema({
    sub_job: {
        type: String,
        unique: true
    },
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material"
    }],
    part_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory"
    },
    pre_reqs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubJob"
    }],
    parts_produced: Number,
    hours_per_part: Number
})

module.exports = mongoose.model('SubJob', subjobSchema)