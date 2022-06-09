const SubJob = require('../db/schemas/subjob')

const SubJobController = {

    // -- Creates a new Sub Job given: sub_job, materials, part_ref, pre_reqs, parts_produced, hours_per_part 
    createNewSubJob : async (req,res) => {
        try {
            const newSJ = await SubJob.create(req.body);
            res.send(newSJ)
        } catch (err) {
            if (err.code === 11000) res.status(400).json({ message: `Sub Job: ${req.body.sub_job} already exists. Job name must be unique.`})
            res.status(500).send({ message: err })
        }
    },

    // -- Returns all documents in the collection: 'subjobs'
    fetchAllSubJobs : async (req,res) => {
        try {
            const subjobs = await SubJob.find()
            res.json(subjobs)
        } catch (err) {
            res.status(500).send({ message: err })
        }
    },

    // -- Returns one Sub Job Given: ObjectId -- //
    fetchOneSubJob : async (req,res) => {
        try {
            const doc = await SubJob.findById(req.params.id)
            res.json(doc)
        } catch (err) {
            res.status(500).send({ message: err })
        }
    },

    // -- Updates an existing Sub Job given: ObjectId & changes -- //
    updateSubJob : async (req,res) => {
        try {
            // -- if user is updating materials -- //
            // const updatedSJ = await SubJob.findByIdAndUpdate(req.params.id,  { $addToSet: { materials: req.body.materials } } )
            const updatedSJ = await SubJob.findByIdAndUpdate(req.params.id, req.body)
            res.json({ message: `${updatedSJ.sub_job}: updated successfully!`})
        } catch (err) {
            res.status(500).send({ message: err })
        }
    }

}

module.exports = SubJobController

// -- What do we need? -- //

/*
    - A user can fill out a form to create a new subjob && ...
    - ... on that form is a dropdown list of all materials.
    - Fetch all subjobs
    - FindByIdAndUpdate => find an existing subjob and update the materials needed mostly

*/