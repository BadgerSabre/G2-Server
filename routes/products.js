const router = require('express').Router()
const ProductsController = require('../controllers/products')

router.get('/', ProductsController.fetchAllProducts )
router.get('/:id', ProductsController.fetchProductById )
router.get('/find/:name', ProductsController.fetchProductByName )
router.get('/time/:id', ProductsController.populateTime )
router.get('/price/:id', ProductsController.populatePrice )
router.get('/parts/:id', ProductsController.populateParts )
router.post('/', ProductsController.createProduct )
router.put('/:id', ProductsController.updateProduct )
router.delete('/:id', ProductsController.deleteProduct )

module.exports = router;