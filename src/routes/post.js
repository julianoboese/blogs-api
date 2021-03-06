const express = require('express');
const { authorization, createPostValidation, updatePostValidation } = require('../middlewares');
const PostController = require('../controllers/PostController');

const routes = express.Router();

routes.use(authorization);
routes.get('/', PostController.findPosts);
routes.get('/search', PostController.searchPosts);
routes.get('/:id', PostController.findPost);
routes.post('/', createPostValidation, PostController.createPost);
routes.put('/:id', updatePostValidation, PostController.updatePost);
routes.delete('/:id', PostController.deletePost);

module.exports = routes;
