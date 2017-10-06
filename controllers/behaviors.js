const Behavior = require('../models/behavior')

module.exports = function (app) {
    //GET new behavior form
    app.get('/behaviors/new', function (req, res) {
        res.render('behaviors-new', {})
    })

    //GET behavior edit form
    app.get('/behaviors/:id/edit', function (req, res) {
        Behavior.findById(req.params.id).then((behavior) => {
            res.render('behaviors-edit', { behavior: behavior })
        })
    })

    //GET individual behavior
    app.get('/behaviors/:id', function (req, res) {
        Behavior.findById(req.params.id).then((behavior) => {
            res.render('behaviors-show', { behavior: behavior })
        })
    })

    //POST new behavior
    app.post('/behaviors', function (req, res) {
        Behavior.create(req.body, function (err, behavior) {
            console.log(behavior)
            res.redirect('/')
        })
    })

    //PUT edit behavior
    app.put('/behaviors/:id', function (req, res) {
        Behavior.findByIdAndUpdate(req.params.id, req.body, function (err, behavior) {
            res.redirect('/behaviors/' + behavior._id)
        })
    })

    //DELETE behavior
    app.delete('/behaviors/:id', function (req, res) {
        Behavior.findByIdAndRemove(req.params.id, function (err) {
            res.redirect('/')
        })
    })
}
