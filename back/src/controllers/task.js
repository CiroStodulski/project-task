const mongoose = require('mongoose');
const modelProject = mongoose.model('project');
const modelTask = mongoose.model('task-status');
let controller = {};

module.exports = app => {
    
    controller.post = (req, res) => {
        const project = req.param.project,
            controllerProject = app.src.controllers.project,
            task = req.body;
        task.date = new Date(task.date);
        task._id = mongoose.Types.ObjectId();
        modelProject.update(project, {
                $push: {
                    tasks: task
                }
            })
            .then(result => {
                controllerProject.getOne(req, res);
            })
            .catch(erro => {
                res.status(500).json(erro);
            });
    }

    controller.put = async (req, res) => {
        const project = req.params.project,
            idTask = req.body.id,
            controllerProject = app.src.controllers.project,
            statusTask = req.body.status;
        try {
            const resp = await modelProject.findOne({
                _id: project
            });
            let tasks = resp.tasks.map(task => {
                if (task._id == idTask) {
                    task.status = statusTask;
                }
                return task;
            });
            modelProject.update({
                    _id: project
                }, {
                    $set: {
                        tasks: tasks
                    }
                })
                .then(result => {
                    controllerProject.getOne(req, res);
                })
                .catch(erro => {
                    res.status(500).json(erro);
                });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    controller.delete = async (req, res) => {
        const project = req.params.project,
            controllerProject = app.src.controllers.project,
            idTask = req.body.id;
        try {
            const resp = await modelProject.findOne({
                _id: project
            });
            let tasks = resp.tasks.filter(task => task._id != idTask);
            console.log(tasks)
            modelProject.update({
                    _id: project
                }, {
                    $set: {
                        tasks: tasks
                    }
                })
                .then(result => {
                    controllerProject.get(req, res);
                })
                .catch(erro => {
                    res.status(500).json(erro);
                });

        } catch (error) {
            res.status(500).json(error);
        }
    }

    return controller;
}