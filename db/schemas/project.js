const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["In Design", "Review", "In Production", "In Shipping", "Shipped"],
        default: "In Design"
    },
    ship_date: {
        type: Date
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    }]
})

projectSchema.methods.populateData = async function () {
    let data = await this.populate({
        path: "products",
        model: "Product",
        populate: {
            path: "required_jobs",
            model: "Job",
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
            },
        }
    })

    return data;
}

projectSchema.methods.setAssignments = async function () {
    const data = await this.populateData();
    let temp = []
    data.products.forEach(prod => {
        prod.required_jobs.forEach(job => {
            job.tasks.forEach(task => {
                // console.log(task._id)
                temp.push(task._id)
            })
        })
    })

    return temp;
}



projectSchema.methods.getEstimatedTime = async function () {
    const data = await this.populateData()
    let estimated_time = 0;

    data.products.forEach(prod => {
        prod.required_jobs.forEach(job => {
            job.tasks.forEach(task => {
                task.sub_jobs.forEach(sj => {
                    const time = sj.hours_per_part;
                    const numParts = sj.parts_produced;
                    numParts === 0 ? estimated_time += time : estimated_time += numParts * time;
                })
            })
        })
    })

    return estimated_time.toFixed(2);
}

projectSchema.methods.getRequiredJobs = async function () {
    const data = await this.populateData()
    let temp = [];
    data.products.forEach(prod => prod.required_jobs.forEach(job => temp.push(job.job) ))
    data.products.forEach(prod => prod.product.required_jobs.forEach(job => temp.push(job.job) ) )
    return temp;
}

module.exports = mongoose.model('Project', projectSchema)