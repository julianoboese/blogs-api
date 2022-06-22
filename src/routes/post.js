const express = require('express');
const { authorization, createPostValidation } = require('../middlewares');
const PostController = require('../controllers/PostController');

const routes = express.Router();

routes.use(authorization);
routes.get('/', PostController.findPosts);
routes.get('/:id', PostController.findPost);
routes.post('/', createPostValidation, PostController.createPost);

module.exports = routes;
