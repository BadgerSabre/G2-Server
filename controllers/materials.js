const Material = require('../db/schemas/material')

const MaterialController = {
    // -- material, num_required, job_ref -- //
    createNewMaterial : async (req,res) => {
        try {
            const newMat = await Material.create(req.body)
            res.json({ message: `${newMat.material}: Created Successfully!`})
        } catch (err) {
            if (err.code === 11000) res.status(400).json({ message: `Material: ${req.body.material} already exists. Material name must be unique.`})
            res.status(500).send({ message: err })
        }
    },
    fetchAllMaterials : async (req,res) => {
        try {
            const mats = await Material.find().populate('material')
            res.json(mats)
        } catch (err) {
            res.status(500).send({ message: err })
        }
    },
    fetchOneMaterial : async (req,res) => {
        try {
            const mat = await Material.findById(req.params.id).populate('material')
            if (mat === null) return res.json({ message: "Couldn't find that Material! Make sure the Material you're looking for exists"})
            res.json(mat)
        } catch (err) {
            res.status(500).send({ message: err })
        }
    }
}

module.exports = MaterialController