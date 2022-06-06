const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    job: {
        type: String,
        unique: true,
        required: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
})

module.exports = mongoose.model('Job', jobSchema)