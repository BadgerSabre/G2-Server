const router = require('express').Router();
const AssignmentsController = require('../controllers/assignments')

router.get('/:id', AssignmentsController.fetchAssignments )

module.exports = router;