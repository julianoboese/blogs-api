const express = require('express');
const { userValidation, authorization } = require('../middlewares');
const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.post('/', userValidation, UserController.createUser);

routes.use(authorization);
routes.get('/', UserController.findUsers);
routes.get('/:id', UserController.findUser);

module.exports = routes;
