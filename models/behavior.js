const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var BehaviorSchema = new Schema({
    impact            : { type: String, required: true },
    isPositive        : { type: Boolean },
    name              : { type: String, required: true },
    description       : { type: String, required: true }
})

//Add severity of issue or helpfulness

BehaviorSchema.pre('save', function (next) {
    if (this.impact === 'Positive') {
        this.isPositive = true
    } else {
        this.isPositive = false
    }
    next()
})

module.exports = mongoose.model('Behavior', BehaviorSchema)
