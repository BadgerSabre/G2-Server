const bcrypt = require('bcrypt');
// employee stuff
const Employee = require('../db/schemas/employees')
const employeesData = require('../db/seeders/employee_seeder')
// inventory stuff
const Inventory = require('../db/schemas/inventory')
const inventoryData = require('../db/seeders/inventory_seeder')
// Departments
const Department = require('../db/schemas/departments')
const departmentsData = require('../db/seeders/departments_seeder')

// Do NOT run this again
const seedEmployeesData = (req,res) => {
    Employee.insertMany(employeesData, (err,docs) => {
        if (err) return res.send(err)
        res.json(docs)
    })
}
// Do NOT run this again
const hashEmployeePass = async (req,res) => {
    let allEmployees = await Employee.find()
    allEmployees.forEach( async (empl) => {
        let hashed = await bcrypt.hash(empl.password,10)
        Employee.findByIdAndUpdate({_id: empl._id}, {password: hashed}, (err,doc) => {
            if (err) res.send(err)
            console.log('success')
        })
    })
    res.send('success')
}

const fetchAllEmployees = async (req,res) => {
    let empl = await Employee.find()
    let total = empl.length;
    let passwords = empl.map(e => e.password)
    res.json({total: total, pass: passwords})
}

// Do NOT run this again
const seedInventoryData = (req,res) => {
    Inventory.insertMany(inventoryData, (err,docs) => {
        if (err) return res.send(err)
        res.json(docs)
    })
}

const seedDepartments = (req,res) => {
    Department.insertMany(departmentsData, (err,docs) => {
        if (err) return res.send(err)
        res.json(docs)
    })
}

module.exports = { seedEmployeesData, hashEmployeePass, fetchAllEmployees, seedInventoryData, seedDepartments }