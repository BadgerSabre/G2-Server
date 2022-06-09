const router = require('express').Router();
const OpportunityController = require('../controllers/opportunities')

// -- Auth? --//
router.get('/', OpportunityController.fetchAllOpportunities )
router.get('/:id', OpportunityController.fetchOneOpportunity )
router.post('/', OpportunityController.createNewOpportunity )
router.put('/:id', OpportunityController.updateOpportunity )

module.exports = router;