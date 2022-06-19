const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({
    project_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    }],
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Assignment', assignmentSchema)

/* 
    1. Opportunity
    2. Project (PM Page)
    3. Supervisor Page
    4. Assignments
    5. Production Work Centers (page) Assignments
*/