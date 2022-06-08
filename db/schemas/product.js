const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    required_jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
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
            }
        }
    })
    return data;
}

productSchema.methods.getEstimatedTime = async function () {
    const data = await this.populateData()
    // let subjobs = data.required_jobs.map(job => {
    //     return job.tasks.map(task => task.sub_jobs)
    // })
    // let subjobs = tasks.map(task => task.sub_jobs)

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

}

productSchema.methods.getRequiredParts = async function () {

}

module.exports = mongoose.model('Product', productSchema)