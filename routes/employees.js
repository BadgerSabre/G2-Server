const router = require('express').Router()
const EmployeeController = require('../controllers/employees')

// GET all employees
router.get('/', EmployeeController.getAllEmployees )

// GET employee by Id
router.get('/:id', EmployeeController.getEmployeeById )

// POST create new employee
router.post('/', EmployeeController.createNewEmployee )

// PUT update employee by Id
router.put('/:id', EmployeeController.updateEmployeeById )

// DELETE employee by Id
router.delete('/:id', EmployeeController.deleteEmployeeById )

module.exports = router