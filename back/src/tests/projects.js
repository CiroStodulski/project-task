const mongoose = require('../../config/dbconnection');
require('../models/project');
const assert = require('assert');

const modelProject = mongoose.model('project');

describe('Testing projects functions', () => {
    it('...list projects', () => {
        modelProject.paginate({}, {
                offset: 0,
                limit: 8
            })
            .then(result => {
                mongoose.disconnect();
            })
            .catch(erro => {
                assert.fail(erro)
                mongoose.disconnect()
            })

    });

    it('...add new project', () => {
        modelProject.insertMany({
                "tasks": [{
                    "name": "sprint 01",
                    "date": "2012-02-07T02:00:00.000Z",
                    "proprietario": "stodulski",
                    "_id": "5b6650f88979aa054c077a81",
                    "status": {
                        "name": "backlog"
                    }
                }],
                "name": "teste",
                "__v": 0
            })
            .then(result => {
                mongoose.disconnect();
            })
            .catch(erro => {
                assert.fail(erro)
                mongoose.disconnect()
            })

    });

    it('...delete project', () => {
        modelProject.remove({
                name: "teste"
            })
            .then(result => {
                mongoose.disconnect();
            })
            .catch(erro => {
                assert.fail(erro)
                mongoose.disconnect()
            })

    });

});