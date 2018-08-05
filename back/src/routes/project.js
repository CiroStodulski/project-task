module.exports = app => {

    const projectController = app.src.controllers.project;

    app.route('/api/projects')
        .get(projectController.get)
        .post(projectController.add);
    
    app.route('/api/projects/:id')
        .delete(projectController.remove);

}