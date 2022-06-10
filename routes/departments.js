const router = require('express').Router()
const DepartmentController = require('../controllers/departments')

router.get('/', DepartmentController.getAllDepartments )
router.get('/:id', DepartmentController.getDepartmentById )
router.post('/', DepartmentController.createNewDepartment )
router.put('/:id', DepartmentController.updateDepartmentById )

module.exports = router