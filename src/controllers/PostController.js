const PostService = require('../services/PostService');
const getCurrentUser = require('../utils/currentUser');

async function createPost(req, res) {
  const token = req.headers.authorization;

  const { id } = getCurrentUser(token);

  const newPost = await PostService.createPost({ ...req.body, userId: id });

  res.status(201).json(newPost);
}

module.exports = {
  createPost,
};
