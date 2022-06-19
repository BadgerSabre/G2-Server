const Assignment = require('../db/schemas/assignments')

const AssignmentsController = {

    fetchAssignments : async (req,res) => {
        try {
            const data = await Assignment.find({project_ref: req.params.id})
            res.json(data)
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: err })
        }
    },
}

module.exports = AssignmentsController