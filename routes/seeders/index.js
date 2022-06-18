const router = require('express').Router();
const seeders = require('../../controllers/seed_data')
const Task = require('../../db/schemas/task')
const Job = require('../../db/schemas/job')
const Assignment = require('../../db/schemas/assignments')
router.post('/task', async (req,res) => {
    const task = await Task.create(req.body)
    res.json(task)
})

router.post('/job', async (req,res) => {
    const job = await Job.create(req.body)
    res.json(job)
})

router.put('/assignments/:id', async (req,res) => {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body)
    res.json(assignment)
})

// -- Employees -- //
router.get('/employees/all', seeders.EmployeesController.fetchAllEmployees )
// -- Inventory -- //
router.get('/inventory/machines', seeders.InventoryController.seedMachD )
// -- Departments -- //

// -- Materials -- //
router.get('/materials/cnc/raw_c', seeders.MaterialsController.seedRawMatC )
router.get('/materials/cnc/raw_d', seeders.MaterialsController.seedRawMatD )
router.get('/materials/cnc/raw_d-02', seeders.MaterialsController.seedRawMatD_02 )
// -- Sub Jobs -- //
router.get('/subjobs/cnc/01C-01', seeders.SubJobsController.seedCNCC )
router.get('/subjobs/weld/01C', seeders.SubJobsController.seedWELD01C )
router.get('/subjobs/fin/01C-01', seeders.SubJobsController.seedFIN01C01 )
router.get('/subjobs/fin/01C-02', seeders.SubJobsController.seedFIN01C02 )
router.get('/subjobs/asm/01C-01', seeders.SubJobsController.seedASM01C01 )
router.get('/subjobs/asm/01C-02', seeders.SubJobsController.seedASM01C02 )
router.get('/subjobs/elec/01C-01', seeders.SubJobsController.seedELEC01C01 )
router.get('/subjobs/elec/01C-02', seeders.SubJobsController.seedELEC01C02 )
router.get('/subjobs/test/01C-01', seeders.SubJobsController.seedTEST01C01 )
router.get('/subjobs/cnc/01D-01', seeders.SubJobsController.seedCNCD )
router.get('/subjobs/cnc/01D-02', seeders.SubJobsController.seedCNCD02 )
router.get('/subjobs/weld/01D', seeders.SubJobsController.seedWELD01D )
router.get('/subjobs/fin/01D-01', seeders.SubJobsController.seedFIN01D01 )
router.get('/subjobs/fin/01D-02', seeders.SubJobsController.seedFIN01D02 )
router.get('/subjobs/fin/02D-01', seeders.SubJobsController.seedFIN02D01 )
router.get('/subjobs/fin/02D-02', seeders.SubJobsController.seedFIN02D02 )
router.get('/subjobs/asm/01D-01', seeders.SubJobsController.seedASM01D01 )
router.get('/subjobs/asm/01D-02', seeders.SubJobsController.seedASM01D02 )
router.get('/subjobs/asm/01D-03', seeders.SubJobsController.seedASM01D03 )
router.get('/subjobs/elec/01D-01', seeders.SubJobsController.seedELEC01D01 )
router.get('/subjobs/elec/01D-02', seeders.SubJobsController.seedELEC01D02 )
router.get('/subjobs/test/01D-01', seeders.SubJobsController.seedTEST01D01 )
// -- Tasks -- //
router.get('/tasks/cnc/01C', seeders.TasksController.seedCNC01C )
router.get('/tasks/weld/01C', seeders.TasksController.seedWELD01C )
router.get('/tasks/fin/01C', seeders.TasksController.seedFIN01C )
router.get('/tasks/asm/01C', seeders.TasksController.seedASM01C )
router.get('/tasks/elec/01C', seeders.TasksController.seedELEC01C )
router.get('/tasks/test/01C', seeders.TasksController.seedTEST01C )
router.get('/tasks/cnc/01D', seeders.TasksController.seedCNC01D )
router.get('/tasks/weld/01D', seeders.TasksController.seedWELD01D )
router.get('/tasks/fin/01D', seeders.TasksController.seedFIN01D )
router.get('/tasks/fin/02D', seeders.TasksController.seedFIN02D )
router.get('/tasks/asm/01D', seeders.TasksController.seedASM01D )
router.get('/tasks/elec/01D', seeders.TasksController.seedELEC01D )
router.get('/tasks/test/01D', seeders.TasksController.seedTEST01D )
// -- Jobs -- //
router.get('/jobs/jobc', seeders.JobsController.seedJOB01C)
router.get('/jobs/jobd', seeders.JobsController.seedJOB01D)
// -- Products -- //
router.get('/prods/prodc', seeders.ProductsController.seedProdC)
router.get('/prods/prodd', seeders.ProductsController.seedProdD)

module.exports = router;