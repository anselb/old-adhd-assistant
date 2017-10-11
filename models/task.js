const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var TaskSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: false },
    description: { type: String, required: false },
    subtask: [this]
})

module.exports = mongoose.model('Task', TaskSchema)
