const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    required_parts: [
        {
            pid: Number,
            num_required: Number
        }
    ],
    required_jobs: {
        job: {
            task: {
                order_num: Number,
                sub_jobs: {
                    subjob: {
                        materials: [{
                            material: mongoose.Schema.Types.ObjectId,
                            num_required: Number
                        }],
                        parts_produced: Number,
                        pid: Number,
                        hours_per_part: Number
                    }
                }
            }
        }
    }
})