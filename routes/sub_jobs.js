const router = require('express').Router()
const SubJobController = require('../controllers/sub_jobs')

router.get('/', SubJobController.findAllSubJobs )
router.get('/:id', SubJobController.findOneSubJob )
router.post('/', SubJobController.createNewSubJob )
// -- Needs Auth ? -- //
router.put('/:id', SubJobController.updateSubJob )

module.exports = router;