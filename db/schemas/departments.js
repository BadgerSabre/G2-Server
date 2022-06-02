const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    dept_id: Number,
    dept_name: String,
    work_centers: [{
        work_center: String,
        employees: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee'
        }],
        wc_id: Number
    }]
})

module.exports = mongoose.model('Department', departmentSchema)