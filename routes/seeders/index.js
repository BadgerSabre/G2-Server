const router = require('express').Router();
const seeders = require('../../controllers/seed_data')

// -- Employees -- //
router.get('/employees/all', seeders.EmployeesController.fetchAllEmployees )
// -- Inventory -- //
router.get('/inventory/machines', seeders.InventoryController.seedMachC )
// -- Departments -- //

// -- Materials -- //
router.get('/materials/cnc/raw_c', seeders.MaterialsController.seedRawMatC )
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
// -- Tasks -- //
router.get('/tasks/cnc/01C', seeders.TasksController.seedCNC01C )
router.get('/tasks/weld/01C', seeders.TasksController.seedWELD01C )
router.get('/tasks/fin/01C', seeders.TasksController.seedFIN01C )
router.get('/tasks/asm/01C', seeders.TasksController.seedASM01C )
router.get('/tasks/elec/01C', seeders.TasksController.seedELEC01C )
router.get('/tasks/test/01C', seeders.TasksController.seedTEST01C )
// -- Jobs -- //
router.get('/jobs/jobc', seeders.JobsController.seedJOB01C)
// -- Products -- //
router.get('/prods/prodc', seeders.ProductsController.seedProdC)

module.exports = router;