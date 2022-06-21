const express = require('express');
const { loginValidation } = require('../middlewares');
const LoginController = require('../controllers/LoginController');

const routes = express.Router();

routes.post('/', loginValidation, LoginController.login);

module.exports = routes;
