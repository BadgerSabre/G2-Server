const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: String,
    op_num: Number,
    sub_jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubJob"
    }]
})

module.exports = mongoose.model('Task', taskSchema)