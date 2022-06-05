const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    dept_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    first_name:{
        type: String,
        required: true
    },
    id_num: {
        type: Number,
        required: true,
        unique: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: String,
    pay: {
        type: Number,
        default: 0
    },
    salary: {
        type: Boolean,
        default: false
    },
    start_date: Date,
    wc_id: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Employee', employeeSchema)