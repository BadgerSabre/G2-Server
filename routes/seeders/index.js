const router = require('express').Router();
const seeders = require('../../controllers/seed_data')

// -- Employees -- //
router.get('/employees/all', seeders.EmployeesController.fetchAllEmployees )
// -- Inventory -- //

// -- Departments -- //

// -- Materials -- //

// -- Sub Jobs -- //

// -- Tasks -- //

// -- Jobs -- //

// -- Products -- //

module.exports = router;