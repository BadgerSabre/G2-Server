const bcrypt = require('bcrypt');
// -- Employee Schema & Seeder Data -- // 
const Employee = require('../db/schemas/employee')
const employeesData = require('../db/seeders/employees/employees_data')
// -- Inventory Schema & Seeder Data -- //
const Inventory = require('../db/schemas/inventory')
// -- Department Schema & Seeder Data -- //
const Department = require('../db/schemas/department')
// -- Materials -- //
const Material = require('../db/schemas/material')
// -- Sub Jobs -- //
const SubJob = require('../db/schemas/subjob')
// -- Tasks -- //
const Task = require('../db/schemas/task')
// -- Jobs -- //
const Job = require('../db/schemas/job')
// -- Product Schema & Data -- //
const Product = require('../db/schemas/product')

// -- Employee Related Functions -- //
const EmployeesController = {
    fetchAllEmployees : async (req,res) => {
        let empl = await Employee.find()
        let total = empl.length;
        let passwords = empl.map(e => e.password)
        res.json({total: total, pass: passwords})
    }
}
// -- Inventory Related Functions -- //
const InventoryController = {
    
}
// -- Department Related Functions -- //
const DepartmentsController = {
    
}
// -- Materials -- //
const MaterialsController = {
    
}
// -- Sub Jobs -- //
const SubJobsController = {
    
}
// -- Tasks -- //
const TasksController = {
    
}
// -- Jobs -- //
const JobsController = {
    
}
// -- Products -- //
const ProductsController = {
    
}


// -- Export All Functions -- //
module.exports = { EmployeesController, InventoryController, DepartmentsController, MaterialsController, SubJobsController, TasksController, JobsController, ProductsController }