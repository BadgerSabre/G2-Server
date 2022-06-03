const router = require('express').Router();
const seeders = require('../../controllers/seed_data')

router.get('/employees', seeders.seedEmployeesData )
router.get('/employees/all', seeders.fetchAllEmployees )
// router.get('/employees/hash', seeders.hashEmployeePass )
router.get('/inventory', seeders.seedInventoryData )

module.exports = router;