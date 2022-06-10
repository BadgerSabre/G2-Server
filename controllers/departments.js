const Department = require('../db/schemas/department')

const DepartmentController = {

    // GET all departments
    getAllDepartments : async (req, res) => {
        try {
            const allDepartments = await Department.find()
            res.json(allDepartments)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },

    // GET department by Id
    getDepartmentById : async (req, res) => {
        try {
            const { id } = req.params
            const department = await Department.findById(id)
            res.json(department)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },

    // POST create new department
    createNewDepartment : async (req, res) => {
        try {
            const newDepartment = await Department.create(req.body)
            res.json({ message: `${newDepartment.dept_name} was created with id: ${newDepartment.dept_id}.`})
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },

    // PUT update department by Id
    updateDepartmentById : async (req, res) => {
        try {
            const { id } = req.params
            const updatedDepartment = await Department.findByIdAndUpdate(id, req.body)
            res.json({ message: `${updatedDepartment.dept_name} has been updated.`})
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    // Finish PUT controller and add routes for departments
}

module.exports = DepartmentController