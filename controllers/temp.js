// -- Product Schema & Data -- //
const Product = require('../db/schemas/product')

const test = async (req,res) => {
    const id = req.params.id
    let macha = await Product.findById(id)
    let estimatedTime = await macha.getEstimatedTime()
    res.json({estimatedTime: estimatedTime})
}

module.exports = { test }