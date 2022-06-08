const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    required_jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        unique: true
    }]
}, {
    toJSON: { virtuals: true }
})

productSchema.methods.populateData = async function () {
    let data = await this.populate({
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
    return data;
}

productSchema.methods.getEstimatedTime = async function () {
    const data = await this.populateData()
    let estimated_time = 0;

    data.required_jobs.forEach(job => {
        job.tasks.forEach(task => {
            task.sub_jobs.forEach(sj => {
                const time = sj.hours_per_part;
                const numParts = sj.parts_produced;
                numParts === 0 ? estimated_time += time : estimated_time += numParts * time; 
            })
        })
    })

    return estimated_time;
}

productSchema.methods.getEstimatedPrice = async function () {
    const data = await this.populateData();
    let estimated_time = await this.getEstimatedTime();
    let estimated_price = 0;

    // will need to get average pay of each dept? or just hard code it?
    // Calculate labor cost
    estimated_price += estimated_time * 20;

    data.required_jobs.forEach(job => {
        job.tasks.forEach(task => {
            task.sub_jobs.forEach(sj => {
                // This conditional Check will go away once all parts have a price
                if (sj.part_ref.price) {
                    estimated_price += sj.part_ref.price * sj.parts_produced; 
                }
            })
        })
    })
    
    return estimated_price;
}

productSchema.methods.getRequiredParts = async function () {
    const data = await this.populateData();
    let parts = []

    data.required_jobs.forEach(job => {
        job.tasks.forEach(task => {
            task.sub_jobs.forEach(sj => {
                parts.push({ num_required: sj.parts_produced, part: sj.part_ref })
            })
        })
    })

    return parts;
}

module.exports = mongoose.model('Product', productSchema)