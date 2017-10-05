const express = require('express')
const exphbs = require('express-handlebars')
const request = require('request')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const moment = require('moment')
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/adhd-assistant', { useMongoClient: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

require('./controllers/tasks')(app)

var Task = require('./models/task')

//GET index
app.get('/', function (req, res) {
    Task.find(function (err, tasks) {
        res.render('tasks-behaviors-index', { tasks: tasks })
    })
})

app.listen(3000, function () {
    console.log('ADHD Assistant listening on port 3000')
})
