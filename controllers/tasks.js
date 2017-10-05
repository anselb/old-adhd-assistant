const moment = require('moment')
moment().format()

const Task = require('../models/task')

module.exports = function (app) {
    //GET new task form
    app.get('/tasks/new', function (req, res) {
        res.render('tasks-new', {})
    })

    //GET individual tasks
    app.get('/tasks/:id', function (req, res) {
        Task.findById(req.params.id).then((task) => {
            res.render('tasks-show', { task: task })
        })
    })

    //GET task edit form
    app.get('/tasks/:id/edit', function (req, res) {
        Task.findById(req.params.id).then((task) => {
            res.render('tasks-edit', { task: task })
        })
    })

    //POST create new task
    app.post('/tasks', function (req, res) {
        console.log(req.body.date)
        var date = new Date(req.body.date)
        var userTimezoneOffset = date.getTimezoneOffset() * 60000
        req.body.date = new Date(date.getTime() + userTimezoneOffset).toLocaleString()
        //req.body.date = userDate.toLocaleString('en-US')
        console.log(req.body.date)
        Task.create(req.body, function (err, task) {
            console.log(task)
            res.redirect('/')
        })
    })

    //PUT edit task
    app.put('/tasks/:id', function (req, res) {
        if (req.body.date === '') {
            Task.findById(req.params.id).then((task) => {
                req.body.date = task.date
                console.log(task.date)
            }).then(() => {
                console.log(req.body)
                Task.findByIdAndUpdate(req.params.id, req.body, function (err, task) {
                    res.redirect('/tasks/' + task._id)
                })
            })
        } else {
            console.log(req.body)
            Task.findByIdAndUpdate(req.params.id, req.body, function (err, task) {
                res.redirect('/tasks/' + task._id)
            })
        }
    })

    //DELETE task
    app.delete('/reviews/:id', function (req, res) {
        Task.findByIdAndRemove(req.params.id, function (err) {
            res.redirect('/')
        })
    })
}
