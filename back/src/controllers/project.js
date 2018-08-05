const mongoose = require('mongoose');
const modelProject = mongoose.model('project');
let controller = {};

module.exports = app => {

    controller.get = (req, res) => {
        modelProject.paginate({}, {
                offset: 0,
                limit: 8
            })
            .then(result => res.json(result.docs))
            .catch(erro => res.status(500).json(erro));
    };

    controller.getOne = (req, res) => {
        modelProject.findOne({
                _id: req.params.project
            })
            .then(result => res.json(result))
            .catch(erro => res.status(500).json(erro));
    }

    controller.add = (req, res) => {
        modelProject.insertMany(req.body)
            .then(result => controller.get(req, res))
            .catch(erro => res.status(500).json(erro))
    }

    controller.remove = (req, res) => {
        modelProject.remove({
                _id: req.params.id
            })
            .then(result => controller.get(req, res))
            .catch(erro => res.status(500))
    }

    return controller;
}