const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var BehaviorShema = new Schema({
    impact: { type: String, required: true },
    numImpact: { type: Number },
    name: { type: String, required: true },
    description: { type: String, required: true }
})

//Add severity of issue or helpfulness

BehaviorShema.pre('save', function (next) {
    if (this.impact === 'Positive') {
        this.numImpact = 1
    } else {
        this.numImpact = 0
    }
    next()
})

module.exports = mongoose.model('Behavior', BehaviorShema)
