const mongoose = require('mongoose');

module.exports = app => {

    let controller = {};
    const modelProject = mongoose.model('project');

    controller.add = (req, res) => {


    }

    controller.get = (req, res) => {

        modelProject.paginate({}, {
                offset: 0,
                limit: 8
            })
            .then(result => res.json(result.docs))
            .catch(erro => res.status(500).json(erro));

    }

    controller.update = (req, res) => {

    }

    controller.remove = (req, res) => {

    }

    return controller;
}