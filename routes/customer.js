const router = require('express').Router();
const CustomerController = require('../controllers/customer')

router.get('/', CustomerController.fetchAllCustomers )
router.get('/:id', CustomerController.fetchOneCustomer )
router.post('/', CustomerController.createNewCustomer )
router.put('/:id', CustomerController.updateCustomer )

module.exports = router;