const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    dept_id: {
        type: Number,
        unique: true,
        required: true
    },
    dept_name: {
        type: String,
        unique: true,
        required: true
    },
    work_centers: [{
        work_center: {
            type: String,
            unique: true
        },
        employees: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            unique: true
        }],
        wc_id: {
            type: Number,
            unique: true,
            required: true
        }
    }]
})

module.exports = mongoose.model('Department', departmentSchema)