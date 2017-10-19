const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var TaskSchema = new Schema({
    name              : { type: String, required: true },
    dueAt             : { type: Date },
    dueInMonth        : { type: String },
    dueOnDay          : { type: String },
    dueAtTime         : { type: String },
    description       : { type: String },
    subtask           : [this]
})

TaskSchema.pre('save', function(next) {
    const date = new Date(this.dueAt)
    const days = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    this.dueInMonth = days[date.getMonth()]
    this.dueOnDay = date.getDate()
    console.log("test")

    let dateHour = date.getHours()
    let dayOrEvening = "AM"
    if (date.getHours() > 11) {
        dateHour -= 12
        dayOrEvening = "PM"
    }
    if (dateHour === 0) {
        dateHour = 12
    }

    let dateMinutes = date.getMinutes()
    if (dateMinutes < 10) {
        dateMinutes = "0" + String(dateMinutes)
    }
    
    this.dueAtTime = String(dateHour) + ":" + String(dateMinutes) + " " + dayOrEvening
    next()
})

module.exports = mongoose.model('Task', TaskSchema)
