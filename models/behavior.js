const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var BehaviorSchema = new Schema({
    impact: { type: String, required: true },
    numImpact: { type: Number },
    name: { type: String, required: true },
    description: { type: String, required: true }
})

//Add severity of issue or helpfulness

BehaviorSchema.pre('save', function (next) {
    if (this.impact === 'Positive') {
        this.numImpact = 1
    } else {
        this.numImpact = 0
    }
    next()
})

module.exports = mongoose.model('Behavior', BehaviorSchema)
