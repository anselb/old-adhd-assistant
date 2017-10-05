const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var TaskSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: false }
})

module.exports = mongoose.model('Task', TaskSchema)
