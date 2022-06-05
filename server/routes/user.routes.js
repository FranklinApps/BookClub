const UserController= require('../controllers/user.controllers');

module.exports = (app) => {
    app.post('/api/user', UserController.createUser);
    app.get('/api/user', UserController.getAllUsers);
    app.get('/api/user/:id', UserController.getOneUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id',UserController.deleteUser);
}

