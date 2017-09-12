var tasks = require('../controllers/tasksController.js');

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        tasks.showAll(req, res);
    });

    app.post('/tasks', function(req, res) {
        tasks.addTask(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        tasks.showTask(req, res);
    });

    app.put('/tasks/:id', function(req, res) {
        tasks.update(req, res);
    });

    app.delete('/tasks/:id', function(req, res) {
        tasks.destroy(req, res);
    });
}