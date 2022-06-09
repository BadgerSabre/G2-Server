const router = require('express').Router()
const SubJobController = require('../controllers/sub_jobs')

router.get('/', SubJobController.fetchAllSubJobs )
router.get('/:id', SubJobController.fetchOneSubJob )
router.post('/', SubJobController.createNewSubJob )
// -- Needs Auth ? -- //
router.put('/:id', SubJobController.updateSubJob )

module.exports = router;