const router = require('express').Router()
const ProjectsController = require('../controllers/projects')

router.get('/', ProjectsController.fetchAllProjects )
router.get('/dates/:type', ProjectsController.fetchProjectsByShipDate )
router.get('/:id', ProjectsController.fetchOneProject )
router.post('/', ProjectsController.createNewProject )
router.put('/:id', ProjectsController.updateProject )

module.exports = router;