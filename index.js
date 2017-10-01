var express = require('express')
var exphbs = require('express-handlebars')
var request = require('request')
var app = express()
var options = { method: 'GET', url: 'https://api.trello.com/1/cards/EIf7HHcL/?key=da83838364db9eb6a750ad7af69e36e8&token=c149aadf45d8d93c302b1ea5e38a05bb70ce9892a7ce74e1ec1c21cf69712e8e' }

// key da83838364db9eb6a750ad7af69e36e8
// token c149aadf45d8d93c302b1ea5e38a05bb70ce9892a7ce74e1ec1c21cf69712e8e

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home', { msg: 'Hello World' })
})

app.listen(3000, function () {
    console.log('ADHD Assistant listening on port 3000')
})

request(options, function (error, response, body) {
    if (error) throw new Error(error)

    console.log(body)
})
