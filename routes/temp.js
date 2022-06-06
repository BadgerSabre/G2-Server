const router = require('express').Router();
const tempController = require('../controllers/temp')
router.get('/:id', tempController.test )
module.exports = router;