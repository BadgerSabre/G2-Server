const Job = require('../db/schemas/job')

const JobController = {

    // GET all jobs
    getAllJobs : async (req, res) => {
        try {
            const allJobs = await Job.find()
            res.json(allJobs)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get job by Id
    getJobById : async (req, res) => {
        try {
            const { id } = req.params
            const job = await Job.findById(id)
            res.json(job)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // POST create new Job
    createNewJob : async (req, res) => {
        try {
            const newJob = await Job.create(req.body)
            res.json({ message: `New job created: ${newJob.job}.`})
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // PUT edit job by Id
    editJobById : async (req, res) => {
        try {
            const { id } = req.params
            const editedJob = await Job.findByIdAndUpdate(id, req.body)
            res.json({ message: `Job: ${editedJob.job} was edited successfully!`})
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE job by Id
    deleteJobById : async (req, res) => {
        try {
            const { id } = req.params
            const deletedJob = await Job.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted ${deletedJob.job}`})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = JobController