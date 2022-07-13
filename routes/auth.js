const router = require('express').Router();
const AuthController = require('../controllers/auth')

router.post('/', AuthController.AuthenticateUser)

module.exports = router;