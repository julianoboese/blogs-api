const express = require('express');
const { userValidation } = require('../middlewares');
const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.post('/', userValidation, UserController.createUser);

module.exports = routes;
