const Behavior = require('../models/behavior')

module.exports = function (app) {
    //GET new behavior form
    app.get('/behaviors/new', function (req, res) {
        res.render('behaviors-new', {})
    })
    //GET edit behavior form
    //GET individual behavior
    //POST new behavior
    app.post('/behaviors', function (req, res) {
        Behavior.create(req.body, function (err, behavior) {
            console.log(behavior)
            res.redirect('/')
        })
    })
    //PUT edit behavior
    //DELETE behavior
}
