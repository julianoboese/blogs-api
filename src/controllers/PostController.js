const PostService = require('../services/PostService');
const getCurrentUser = require('../utils/currentUser');

async function findPosts(_req, res) {
  const posts = await PostService.findPosts();

  res.status(200).json(posts);
}

async function createPost(req, res) {
  const token = req.headers.authorization;

  const { id } = getCurrentUser(token);

  const newPost = await PostService.createPost({ ...req.body, userId: id });

  res.status(201).json(newPost);
}

module.exports = {
  findPosts,
  createPost,
};
