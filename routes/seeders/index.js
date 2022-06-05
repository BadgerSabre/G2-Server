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

module.exports = router;