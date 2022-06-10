const router = require('express').Router()
const EmployeeController = require('../controllers/employees')

router.get('/', EmployeeController.getAllEmployees )
router.get('/:id', EmployeeController.getEmployeeById )
router.post('/', EmployeeController.createNewEmployee )
router.put('/:id', EmployeeController.updateEmployeeById )
router.delete('/:id', EmployeeController.deleteEmployeeById )

module.exports = router