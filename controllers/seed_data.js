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
// -- Materials -- //
const Material = require('../db/schemas/material')
const CNCRawMatA = require('../db/seeders/materials/CNC_Raw_Mat_A')
const CNCRawMatA02 = require('../db/seeders/materials/CNC_Raw_Mat_A_02')
// -- Sub Jobs -- //
const SubJob = require('../db/schemas/subjob')
const CNC_01A_01 = require('../db/seeders/subjobs/CNC-01A-01')
const CNC_01A_02 = require('../db/seeders/subjobs/CNC-01A-02')
const WELD_01A_01 = require('../db/seeders/subjobs/WELD-01A-01')
const FIN_01A_01 = require('../db/seeders/subjobs/FIN-01A-01')
const FIN_01A_02 = require('../db/seeders/subjobs/FIN-01A-02')
const FIN_02A_01 = require('../db/seeders/subjobs/FIN-02A-01')
const FIN_02A_02 = require('../db/seeders/subjobs/FIN-02A-02')
const ASM_01A_01 = require('../db/seeders/subjobs/ASM-01A-01')
const ASM_01A_02 = require('../db/seeders/subjobs/ASM-01A-02')
const ASM_01A_03 = require('../db/seeders/subjobs/ASM-01A-03')
const ELEC_01A_01 = require('../db/seeders/subjobs/ELEC-01A-01')
const ELEC_01A_02 = require('../db/seeders/subjobs/ELEC-01A-02')
const TEST_01A_01 = require('../db/seeders/subjobs/TEST-01A-01')
// -- Tasks -- //
const Task = require('../db/schemas/task')
const CNC_01A_00 = require('../db/seeders/tasks/CNC-01A-00')
const WELD_01A_00 = require('../db/seeders/tasks/WELD-01A-00')
const FIN_01A_00 = require('../db/seeders/tasks/FIN-01A-00')
const FIN_02A_00 = require('../db/seeders/tasks/FIN-02A-00')
const ASM_01A_00 = require('../db/seeders/tasks/ASM-01A-00')
const ELEC_01A_00 = require('../db/seeders/tasks/ELEC-01A-00')
const TEST_01A_00 = require('../db/seeders/tasks/TEST-01A-00')
// -- Jobs -- //
const Job = require('../db/schemas/job')
const JOB_01A_00 = require('../db/seeders/jobs/job-01A')
// -- Product Schema & Data -- //
const Product = require('../db/schemas/product')
const machineA = require('../db/seeders/products/machine_a')

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
// -- Materials -- //
const MaterialsController = {
    seedRawMatA : async (req,res) => {
        const matA = await Material.create(CNCRawMatA);
        res.json(matA)
    },
    seedRawMatA02 : async (req,res) => {
        const matA02 = await Material.create(CNCRawMatA02);
        res.json(matA02)
    }
}
// -- Sub Jobs -- //
const SubJobsController = {
    seedCNCA : async (req,res) => {
        const CNC_SJ = await SubJob.create(CNC_01A_01)
        res.json(CNC_SJ)
    },
    seedCNCA02 : async (req,res) => {
        const CNC_SJ = await SubJob.create(CNC_01A_02)
        res.json(CNC_SJ)
    },
    seedWELD01A : async (req,res) => {
        const WELD_SJ = await SubJob.create(WELD_01A_01)
        res.json(WELD_SJ)
    },
    seedFIN01A01 : async (req,res) => {
        const FIN_SJ = await SubJob.create(FIN_01A_01)
        res.json(FIN_SJ)
    },
    seedFIN01A02 : async (req,res) => {
        const FIN_SJ = await SubJob.create(FIN_01A_02)
        res.json(FIN_SJ)
    },
    seedFIN02A01 : async (req,res) => {
        const FIN_SJ = await SubJob.create(FIN_02A_01)
        res.json(FIN_SJ)
    },
    seedFIN02A02 : async (req,res) => {
        const FIN_SJ = await SubJob.create(FIN_02A_02)
        res.json(FIN_SJ)
    },
    seedASM01A01 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ASM_01A_01)
        res.json(ASM_SJ)
    },
    seedASM01A02 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ASM_01A_02)
        res.json(ASM_SJ)
    },
    seedASM01A03 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ASM_01A_03)
        res.json(ASM_SJ)
    },
    seedELEC01A01 : async (req,res) => {
        const ELEC_SJ = await SubJob.create(ELEC_01A_01)
        res.json(ELEC_SJ)
    },
    seedELEC01A02 : async (req,res) => {
        const ELEC_SJ = await SubJob.create(ELEC_01A_02)
        res.json(ELEC_SJ)
    },
    seedTEST01A01 : async (req,res) => {
        const TEST_SJ = await SubJob.create(TEST_01A_01)
        res.json(TEST_SJ)
    }
}
// -- Tasks -- //
const TasksController = {
    seedCNC01A : async (req,res) => {
        const CNC_01A = await Task.create(CNC_01A_00);
        res.json(CNC_01A)
    },
    seedWELD01A : async (req,res) => {
        const WELD_01A = await Task.create(WELD_01A_00);
        res.json(WELD_01A)
    },
    seedFIN01A : async (req,res) => {
        const FIN_01A = await Task.create(FIN_01A_00);
        res.json(FIN_01A)
    },
    seedFIN02A : async (req,res) => {
        const FIN_02A = await Task.create(FIN_02A_00);
        res.json(FIN_02A)
    },
    seedASM01A : async (req,res) => {
        const ASM_01A = await Task.create(ASM_01A_00);
        res.json(ASM_01A)
    },
    seedELEC01A : async (req,res) => {
        const ELEC_01A = await Task.create(ELEC_01A_00);
        res.json(ELEC_01A)
    },
    seedTEST01A : async (req,res) => {
        const TEST_01A = await Task.create(TEST_01A_00);
        res.json(TEST_01A)
    }
}
// -- Jobs -- //
const JobsController = {
    seedJob01A : async (req,res) => {
        const JOB_01A = await Job.create(JOB_01A_00)
        res.json(JOB_01A)
    }
}
// -- Products -- //
const ProductsController = {
    seedMachA : async (req,res) => {
        const machA = await Product.create(machineA);
        res.json(machA)
    }
}


// -- Export All Functions -- //
module.exports = { EmployeesController, InventoryController, DepartmentsController, MaterialsController, SubJobsController, TasksController, JobsController, ProductsController }