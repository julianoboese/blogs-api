const express = require('express');
const { authorization, categoryValidation } = require('../middlewares');
const CategoriesController = require('../controllers/CategoryController');

const routes = express.Router();

routes.use(authorization);
routes.post('/', categoryValidation, CategoriesController.createCategory);

module.exports = routes;
