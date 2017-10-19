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
        //console.log(req.body.dueAt)
        var date = new Date(req.body.dueAt)
        // var userTimezoneOffset = date.getTimezoneOffset() * 60000
        // req.body.dueAt = new Date(date.getTime() + userTimezoneOffset).toLocaleString()
        //req.body.dueAt = userDate.toLocaleString('en-US')
        console.log(req.body.dueAt)
        Task.create(req.body, function (err, task) {
            console.log(task)
            res.redirect('/')
        })
    })

    //POST create new subtask
    app.post('/tasks/:taskId/subtasks', function (req, res) {
        var subtask = new Task(req.body)
        if (req.body.name !== '') {
            Task.findById(req.params.taskId).then((task) => {
                task.subtask.push(subtask)
                task.save()
                return res.redirect('/')
            })
        }
    })

    //PUT edit task
    app.put('/tasks/:id', function (req, res) {
        if (req.body.dueAt === '') {
            Task.findById(req.params.id).then((task) => {
                req.body.dueAt = task.dueAt
                console.log(task.dueAt)
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
    app.delete('/tasks/:id', function (req, res) {
        Task.findByIdAndRemove(req.params.id, function (err) {
            res.redirect('/')
        })
    })
}
