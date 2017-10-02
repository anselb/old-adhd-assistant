var express = require('express')
var exphbs = require('express-handlebars')
var request = require('request')
var path = require('path')
var app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.render('home', { msg: 'Hello World' })
})

app.listen(3000, function () {
    console.log('ADHD Assistant listening on port 3000')
})
