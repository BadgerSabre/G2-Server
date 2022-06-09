const Opportunity = require('../db/schemas/opportunity')

const OpportunityController = {
    fetchAllOpportunities : async (req,res) => {
        try {
            const opps = await Opportunity.find()
            res.json(opps)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    fetchOneOpportunity : async (req,res) => {
        try {
            const opp = await Opportunity.findById(req.params.id)
            res.json(opp)
        } catch (err) {
            res.status(500).send({ message: err })
        }
    },
    createNewOpportunity : async (req,res) => {
        try {
            const newOpp = await Opportunity.create(req.body)
            res.send({ message: `New Opportunity Created Successfully!`})
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    updateOpportunity : async (req,res) => {
        try {
            const updatedOpp = await Opportunity.findByIdAndUpdate(req.params.id, req.body)
            res.json({ message: `Opportunity Updated Successfully!`})
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }
}

module.exports = OpportunityController;