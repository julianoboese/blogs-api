const express = require('express');
const { authorization, postValidation } = require('../middlewares');
const PostController = require('../controllers/PostController');

const routes = express.Router();

routes.use(authorization);
routes.post('/', postValidation, PostController.createPost);

module.exports = routes;
