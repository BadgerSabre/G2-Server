const Vendor = require('../db/schemas/vendor')

const VendorController = {

    // GET all vendors
    getAllVendors : async (req, res) => {
        try {
            const allVendors = await Vendor.find()
            res.json(allVendors)
        } catch (error) {
            res.status(500).json({ message: error})
        }
    },

    // GET vendor by Id
    getVendorById : async (req, res) => {
        try {
            const { id } = req.params
            const vendorById = await Vendor.findById(id)
            res.json(vendorById)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },

    // POST create new vendor
    createNewVendor : async (req, res) => {
        try {
            const newVendor = await Vendor.create(req.body)
            res.json({ message: `${newVendor.company} was made.`})
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },

    // PUT update vendor by Id
    updateVendorById : async (req, res) => {
        try {
            const { id } = req.params
            const updatedVendor = await Vendor.findByIdAndUpdate(id, req.body)
            res.json({ message: `${updatedVendor.company} was updated.`})
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },

    // DELETE vendor by Id
    deleteVendorById : async (req, res) => {
        try {
            const { id } = req.params
            const deletedVendor = await Vendor.findByIdAndDelete(id)
            res.json({ message: `${deletedVendor.company} was successfully deleted.` })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}

module.exports = VendorController