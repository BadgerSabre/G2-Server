const Customer = require('../db/schemas/customer')

const CustomerController = {
    fetchAllCustomers : async (req,res) => {
        try {
            const customers = await Customer.find()
            res.json(customers)
        } catch (err) {
            res.status(500).json({ message: err})
        }
    },
    fetchOneCustomer : async (req,res) => {
        try {
            const customer = await Customer.findById(req.params.id)
            res.json(customer)
        } catch (err) {
            res.status(500).json({ message: err})
        }
    },
    createNewCustomer : async (req,res) => {
        // company, contact_name, contact_email, shipping_address, contact_phone, purchases, pending_opportunities
        try {
            const newCustomer = await Customer.create(req.body)
            res.json({ message: `${newCustomer.company} created successfully!`})
        } catch (err) {
            res.status(500).json({ message: err})
        }
    },
    updateCustomer : async (req,res) => {
        try {
            const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body)
            res.json({ message: `${updatedCustomer.company} updated successfully!`})
        } catch (err) {
            res.status(500).json({ message: err})
        }
    }
}

module.exports = CustomerController;