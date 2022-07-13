const router = require('express').Router()
const JobController = require('../controllers/jobs')

router.get('/', JobController.getAllJobs )
router.get('/:id', JobController.getJobById )
router.post('/', JobController.createNewJob )
router.put('/:id', JobController.editJobById )
router.delete('/:id', JobController.deleteJobById )

module.exports = router