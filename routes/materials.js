const router = require('express').Router()
const MaterialController = require('../controllers/materials')

router.get('/', MaterialController.fetchAllMaterials )
router.get('/:id', MaterialController.fetchOneMaterial )
router.post('/', MaterialController.createNewMaterial )

module.exports = router;