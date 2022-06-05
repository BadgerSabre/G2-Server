const bcrypt = require('bcrypt');
// -- Employee Schema & Seeder Data -- // 
const Employee = require('../db/schemas/employee')
const employeesData = require('../db/seeders/employees/employees_data')
// -- Inventory Schema & Seeder Data -- //
const Inventory = require('../db/schemas/inventory')
const assemblyParts = require('../db/seeders/inventory/assembly_parts')
const cncParts = require('../db/seeders/inventory/cnc_parts')
const elecParts = require('../db/seeders/inventory/electrical_parts')
const finishParts = require('../db/seeders/inventory/finishing_parts')
const miscParts = require('../db/seeders/inventory/misc_parts')
const vmiParts = require('../db/seeders/inventory/vmi_parts')
const weldParts = require('../db/seeders/inventory/weld_parts')
// -- Department Schema & Seeder Data -- //
const Department = require('../db/schemas/department')
const customerServiceData = require('../db/seeders/departments/customer_service')
const engineeringData = require('../db/seeders/departments/engineering')
const financialData = require('../db/seeders/departments/financial')
const infastructureData = require('../db/seeders/departments/infrastructure')
const operationsData = require('../db/seeders/departments/operations')
const productionData = require('../db/seeders/departments/production')

// -- Employee Related Functions -- //
const EmployeesController = {
    seedEmployeesData : (req,res) => {
        Employee.insertMany(employeesData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    hashEmployeePass : async (req,res) => {
        let allEmployees = await Employee.find()
        allEmployees.forEach( async (empl) => {
            let hashed = await bcrypt.hash(empl.password,10)
            Employee.findByIdAndUpdate({_id: empl._id}, {password: hashed}, (err,doc) => {
                if (err) res.send(err)
                console.log('success')
            })
        })
        res.send('success')
    },
    fetchAllEmployees : async (req,res) => {
        let empl = await Employee.find()
        let total = empl.length;
        let passwords = empl.map(e => e.password)
        res.json({total: total, pass: passwords})
    }
}

// -- Inventory Related Functions -- //
const InventoryController = {
    seedAssemblyParts : (req,res) => {
        Inventory.insertMany(assemblyParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedCNCParts : (req,res) => {
        Inventory.insertMany(cncParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedElectricParts : (req,res) => {
        Inventory.insertMany(elecParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedFinishingParts : (req,res) => {
        Inventory.insertMany(finishParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedMiscParts : (req,res) => {
        Inventory.insertMany(miscParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedVMIParts : (req,res) => {
        Inventory.insertMany(vmiParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedWeldParts : (req,res) => {
        Inventory.insertMany(weldParts, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    }
}

// -- Department Related Functions -- //
const DepartmentsController = {
    seedCustomerService : (req,res) => {
        Department.insertMany(customerServiceData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedEngineering : (req,res) => {
        Department.insertMany(engineeringData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedFinancial : (req,res) => {
        Department.insertMany(financialData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedInfastructure : (req,res) => {
        Department.insertMany(infastructureData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedOperations : (req,res) => {
        Department.insertMany(operationsData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    },
    seedProduction : (req,res) => {
        Department.insertMany(productionData, (err,docs) => {
            if (err) return res.send(err)
            res.json(docs)
        })
    }
}

// -- Export All Functions -- //
module.exports = { EmployeesController, InventoryController, DepartmentsController }