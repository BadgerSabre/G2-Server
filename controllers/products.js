// -- Product Schema -- //
const Product = require('../db/schemas/product')

const ProductController = {

    // -- Creates New Product Given Either: name, required_jobs, or both -- //
    createProduct : async (req,res) => {
        try {
            const doc = await Product.create(req.body)
            res.json(doc)
        } catch (err) {
            if (err.code === 11000) res.status(400).json({ message: `Product: ${req.body.name} already exists. Name field must be unique.`})
            res.status(500).json({ message: err })
        }
    },

    // -- Fetches all Products in the Database -- //
    fetchAllProducts : async (req,res) => {
        try {
            const docs = await Product.find()
                .populate({
                    path: 'required_jobs',
                    model: 'Job',
                    populate: {
                        path: "tasks",
                        model: "Task",
                        populate: {
                            path: "sub_jobs",
                            model: "SubJob",
                            populate: {
                                path: "part_ref",
                                model: "Inventory"
                            }
                        }
                    }
                })
            res.json(docs)
        } catch (err) {
            res.status(500).json({ message: err })
        }

    },

    // -- Fetches Product Given: ObjectID as param -- //
    fetchProductById : async (req,res) => {
        try {
            const doc = await Product.findById(req.params.id)
            if (doc === null) return res.json({ message: "Couldn't find that Product! Make sure the Product you're looking for exists"})
            res.json(doc)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },

    // -- Fetches Product Given: name as a param -- //
    fetchProductByName : async (req,res) => {
        try {
            const doc = await Product.findOne({name: req.params.name})
            if (doc === null) return res.json({ message: "Couldn't find that Product! Make sure the Product you're looking for exists"})
            res.json(doc)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // -- Updates Product Given: name, required_jobs, or both -- //
    updateProduct : async (req,res) => {
        const jobs = req.body.required_jobs;
        const name = req.body.name;
        try {
            if (jobs && name) {
                const doc = await Product.findByIdAndUpdate(req.params.id, {name: name, $addToSet:{ required_jobs: jobs} } )
                return res.json({ message: `${doc.name} updated successfully! Name of ${doc.name} changed, ${doc.required_jobs} updated.`})
            } else if (jobs) {
                const doc = await Product.findByIdAndUpdate(req.params.id, {$addToSet:{ required_jobs: req.body.required_jobs }})
                return res.json({ message: `${doc.name}: Jobs Updated Successfully!`})
            } else {
                const doc = await Product.findByIdAndUpdate(req.params.id, req.body)
                res.json({ message: `Name of ${doc.name} changed successfully!`})
            }
        } catch (err) {
            if (err.kind === "ObjectId") res.status(400).json({ message: err })
            res.status(500).json({ message: err })
        }
    },

    // -- Deletes Product Given: ObjectID as param -- //
    deleteProduct : async (req,res) => {
        try {
            const doc = await Product.findByIdAndDelete(req.params.id)
            res.json({ message: `${doc.name} successfully deleted!`})
        } catch (err) {
            if (err.kind === "ObjectId") res.status(400).json({ message: err })
            res.status(500).json({ message: err })
        }
    },

    // -- Calculates Required time to build product -- //
    populateTime : async (req,res) => {
        try {
            const doc = await Product.findById(req.params.id)
            const time = await doc.getEstimatedTime();
            res.json({ estimated_time: time })
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },

    // -- Calculates Estimated Price to build product -- //
    populatePrice : async (req,res) => {
        try {
            const doc = await Product.findById(req.params.id)
            const price = await doc.getEstimatedPrice();
            res.json({ estimated_price: price })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: err })
        }
    },

    // -- Gathers required parts needed to build product -- //
    populateParts : async (req,res) => {
        try {
            const doc = await Product.findById(req.params.id)
            const parts = await doc.getRequiredParts();
            res.json(parts)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }

}

module.exports = ProductController