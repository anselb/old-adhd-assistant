const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var BehaviorShema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model('Behavior', BehaviorShema)
