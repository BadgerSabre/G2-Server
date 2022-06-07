const bcrypt = require('bcrypt');
// -- Employee Schema & Seeder Data -- // 
const Employee = require('../db/schemas/employee')
const employeesData = require('../db/seeders/employees/employees_data')
// -- Inventory Schema & Seeder Data -- //
const Inventory = require('../db/schemas/inventory')
const MachC = require('../db/seeders/inventory/machines')
// -- Department Schema & Seeder Data -- //
const Department = require('../db/schemas/department')
// -- Materials -- //
const Material = require('../db/schemas/material')
const CNCRawMatC = require('../db/seeders/materials/CNC_Raw_Mat_C')
// -- Sub Jobs -- //
const SubJob = require('../db/schemas/subjob')
const CNC_01C_01 = require('../db/seeders/subjobs/JOB-01C-00/CNC-01C-01')
const WELD_01C_01 = require('../db/seeders/subjobs/JOB-01C-00/WELD-01C-01')
const FIN_01C_01 = require('../db/seeders/subjobs/JOB-01C-00/FIN-01C-01')
const FIN_01C_02 = require('../db/seeders/subjobs/JOB-01C-00/FIN-01C-02')
const ASM_01C_01 = require('../db/seeders/subjobs/JOB-01C-00/ASM-01C-01')
const ASM_01C_02 = require('../db/seeders/subjobs/JOB-01C-00/ASM-01C-02')
const ELEC_01C_01 = require('../db/seeders/subjobs/JOB-01C-00/ELEC-01C-01')
const ELEC_01C_02 = require('../db/seeders/subjobs/JOB-01C-00/ELEC-01C-02')
const TEST_01C_01 = require('../db/seeders/subjobs/JOB-01C-00/TEST-01C-01')
// -- Tasks -- //
const Task = require('../db/schemas/task')
const CNC_01C_00 = require('../db/seeders/tasks/JOB-01C-00/CNC-01C-00')
const WELD_01C_00 = require('../db/seeders/tasks/JOB-01C-00/WELD-01C-00')
const FIN_01C_00 = require('../db/seeders/tasks/JOB-01C-00/FIN-01C-00')
const ASM_01C_00 = require('../db/seeders/tasks/JOB-01C-00/ASM-01C-00')
const ELEC_01C_00 = require('../db/seeders/tasks/JOB-01C-00/ELEC-01C-00')
const TEST_01C_00 = require('../db/seeders/tasks/JOB-01C-00/TEST-01C-00')
// -- Jobs -- //
const Job = require('../db/schemas/job')
const JOB_01C = require('../db/seeders/jobs/job-01C')
// -- Product Schema & Data -- //
const Product = require('../db/schemas/product')
const ProdC = require('../db/seeders/products/machine_c')
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
    seedMachC : async (req, res) => {
        const machc = await Inventory.create(MachC)
        res.json(machc)
    }
}
// -- Department Related Functions -- //
const DepartmentsController = {
    
}
// -- Materials -- //
const MaterialsController = {
    seedRawMatC : async (req,res) => {
        const matA = await Material.create(CNCRawMatC);
        res.json(matA)
    }
}
// -- Sub Jobs -- //
const SubJobsController = {
    seedCNCC : async (req,res) => {
        const CNC_SJ = await SubJob.create(CNC_01C_01)
        res.json(CNC_SJ)
    },
    seedWELD01C : async (req,res) => {
        const WELD_SJ = await SubJob.create(WELD_01C_01)
        res.json(WELD_SJ)
    },
    seedFIN01C01 : async (req,res) => {
        const FIN_SJ = await SubJob.create(FIN_01C_01)
        res.json(FIN_SJ)
    },
    seedFIN01C02 : async (req,res) => {
        const FIN_SJ = await SubJob.create(FIN_01C_02)
        res.json(FIN_SJ)
    },
    seedASM01C01 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ASM_01C_01)
        res.json(ASM_SJ)
    },
    seedASM01C02 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ASM_01C_02)
        res.json(ASM_SJ)
    },
    seedELEC01C01 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ELEC_01C_01)
        res.json(ASM_SJ)
    },
    seedELEC01C02 : async (req,res) => {
        const ASM_SJ = await SubJob.create(ELEC_01C_02)
        res.json(ASM_SJ)
    },
    seedTEST01C01 : async (req,res) => {
        const ASM_SJ = await SubJob.create(TEST_01C_01)
        res.json(ASM_SJ)
    }
}
// -- Tasks -- //
const TasksController = {
    seedCNC01C : async (req,res) => {
        const CNC_01A = await Task.create(CNC_01C_00);
        res.json(CNC_01A)
    },
    seedWELD01C : async (req,res) => {
        const WELD_01A = await Task.create(WELD_01C_00);
        res.json(WELD_01A)
    },
    seedFIN01C : async (req,res) => {
        const FIN_01A = await Task.create(FIN_01C_00);
        res.json(FIN_01A)
    },
    seedASM01C : async (req,res) => {
        const ASM_01A = await Task.create(ASM_01C_00);
        res.json(ASM_01A)
    },
    seedELEC01C : async (req,res) => {
        const ASM_01A = await Task.create(ELEC_01C_00);
        res.json(ASM_01A)
    },
    seedTEST01C : async (req,res) => {
        const ASM_01A = await Task.create(TEST_01C_00);
        res.json(ASM_01A)
    }
}
// -- Jobs -- //
const JobsController = {
    seedJOB01C : async (req, res) => {
        const JOBc = await Job.create(JOB_01C)
        res.json(JOBc)
    }
}
// -- Products -- //
const ProductsController = {
    seedProdC : async (req, res) => {
        const machC = await Product.create(ProdC)
        res.json(machC)
    }
}


// -- Export All Functions -- //
module.exports = { EmployeesController, InventoryController, DepartmentsController, MaterialsController, SubJobsController, TasksController, JobsController, ProductsController }