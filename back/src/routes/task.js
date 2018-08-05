module.exports = app => {

    const taskController = app.src.controllers.task;

    app.route('/api/tasks/:project')
        .post(taskController.post)
        .put(taskController.put)
        .delete(taskController.delete);

}