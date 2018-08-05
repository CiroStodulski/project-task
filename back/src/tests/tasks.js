const mongoose = require('../../config/dbconnection');
require('../models/project');
const assert = require('assert');

const modelProject = mongoose.model('project');
describe('Testing tasks functions', () => {

    before(() => {
        modelProject.insertMany({
                "tasks": [{
                    "name": "teste",
                    "date": "2012-02-07T02:00:00.000Z",
                    "proprietario": "stodulski",
                    "_id": "5b6650f88979aa054c077a81",
                    "status": {
                        "name": "teste unitario"
                    }
                }],
                "name": "teste",
                "__v": 0
            })
            .then(result =>  mongoose.disconnect())
            .catch(erro => {
                assert.fail(erro)
                mongoose.disconnect()
            })
    });

    after(() => {
        modelProject.remove({
                name: "teste"
            })
            .then(result =>  mongoose.disconnect())
            .catch(erro => {
                assert.fail(erro)
                mongoose.disconnect()
            })
    });

    it('...add new task', async () => {

        task = {
            "name": "teste",
            "date": "05-09-2018",
            "proprietario": "ciro",
            "status": {
                "name": "done"
            }
        };
        task.date = new Date(task.date);
        task._id = mongoose.Types.ObjectId();
        modelProject.updateOne({
                name: "teste"
            }, {
                $push: {
                    tasks: task
                }
            })
            .then(result => {})
            .catch(erro => {
                assert.fail(erro)
                mongoose.disconnect()
            })

    });

    it('...update task', async (done) => {

        try {
            const resp = await modelProject.findOne({
                name: "teste"
            });

            let tasks = resp.tasks.map(task => {
                if (task.name == "teste") {
                    task.status = {
                        name: "teste"
                    };
                }
                return task;
            });
            modelProject.update({
                    name: "teste"
                }, {
                    $set: {
                        tasks: tasks
                    }
                })
                .then(result => {
                    done()
                })
                .catch(erro => {
                    assert.fail(erro);
                    mongoose.disconnect();
                })
        } catch (error) {
            assert.fail(error);
            mongoose.disconnect();
        }

    });

    it('...delete task', async () => {
        try {
            const resp = await modelProject.findOne({
                name: "teste"
            });
            let tasks = resp.tasks.filter(task => task.name != "teste");
            modelProject.update({
                    name: "teste"
                }, {
                    $set: {
                        tasks: tasks
                    }
                })
                .then(result => {
                    mongoose.disconnect();
                })
                .catch(erro => {
                    assert.fail(erro);
                    mongoose.disconnect();
                })

        } catch (error) {
            assert.fail(erro);
            mongoose.disconnect();
        }
    });
});