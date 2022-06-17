const router = require('express').Router()
const VendorController = require('../controllers/vendors')

router.get('/', VendorController.getAllVendors )
router.get('/:id', VendorController.getVendorById )
router.post('/', VendorController.createNewVendor )
router.put('/:id', VendorController.updateVendorById )
router.delete('/:id', VendorController.deleteVendorById )

module.exports = router