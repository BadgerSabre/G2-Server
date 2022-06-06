const router = require('express').Router();
const seeders = require('../../controllers/seed_data')

// -- Employees -- //
router.get('/employees', seeders.EmployeesController.seedEmployeesData )
router.get('/employees/all', seeders.EmployeesController.fetchAllEmployees )
router.get('/employees/hash', seeders.EmployeesController.hashEmployeePass )
// -- Inventory -- //
router.get('/inventory/assembly', seeders.InventoryController.seedAssemblyParts )
router.get('/inventory/cnc', seeders.InventoryController.seedCNCParts )
router.get('/inventory/elec', seeders.InventoryController.seedElectricParts )
router.get('/inventory/finish', seeders.InventoryController.seedFinishingParts )
router.get('/inventory/misc', seeders.InventoryController.seedMiscParts )
router.get('/inventory/vmi', seeders.InventoryController.seedVMIParts )
router.get('/inventory/weld', seeders.InventoryController.seedWeldParts )
// -- Departments -- //
router.get('/departments/customerservice', seeders.DepartmentsController.seedCustomerService )
router.get('/departments/engineering', seeders.DepartmentsController.seedEngineering )
router.get('/departments/financial', seeders.DepartmentsController.seedFinancial )
router.get('/departments/infrastructure', seeders.DepartmentsController.seedInfastructure )
router.get('/departments/operations', seeders.DepartmentsController.seedOperations )
router.get('/departments/production', seeders.DepartmentsController.seedProduction )
// -- Materials -- //
router.get('/materials/cnc/raw_a', seeders.MaterialsController.seedRawMatA )
router.get('/materials/cnc/raw_a_02', seeders.MaterialsController.seedRawMatA02 )
// -- Sub Jobs -- //
router.get('/subjobs/cnc/01A-01', seeders.SubJobsController.seedCNCA )
router.get('/subjobs/cnc/01A-02', seeders.SubJobsController.seedCNCA02 )
router.get('/subjobs/weld/01A', seeders.SubJobsController.seedWELD01A )
router.get('/subjobs/fin/01A-01', seeders.SubJobsController.seedFIN01A01 )
router.get('/subjobs/fin/01A-02', seeders.SubJobsController.seedFIN01A02 )
router.get('/subjobs/fin/02A-01', seeders.SubJobsController.seedFIN02A01 )
router.get('/subjobs/fin/02A-02', seeders.SubJobsController.seedFIN02A02 )
router.get('/subjobs/asm/01A-01', seeders.SubJobsController.seedASM01A01 )
router.get('/subjobs/asm/01A-02', seeders.SubJobsController.seedASM01A02 )
router.get('/subjobs/asm/01A-03', seeders.SubJobsController.seedASM01A03 )
router.get('/subjobs/elec/01A-01', seeders.SubJobsController.seedELEC01A01 )
router.get('/subjobs/elec/01A-02', seeders.SubJobsController.seedELEC01A02 )
router.get('/subjobs/test/01A-01', seeders.SubJobsController.seedTEST01A01 )
// -- Tasks -- //
router.get('/tasks/cnc/01A', seeders.TasksController.seedCNC01A )
router.get('/tasks/weld/01A', seeders.TasksController.seedWELD01A )
router.get('/tasks/fin/01A', seeders.TasksController.seedFIN01A )
router.get('/tasks/fin/02A', seeders.TasksController.seedFIN02A )
router.get('/tasks/asm/01A', seeders.TasksController.seedASM01A )
router.get('/tasks/elec/01A', seeders.TasksController.seedELEC01A )
router.get('/tasks/test/01A', seeders.TasksController.seedTEST01A )
// -- Jobs -- //
router.get('/jobs/01A', seeders.JobsController.seedJob01A )
// -- Products -- //
router.get('/products/machines/a', seeders.ProductsController.seedMachA )

module.exports = router;