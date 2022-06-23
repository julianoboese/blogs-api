const PostService = require('../services/PostService');

async function findPosts(_req, res) {
  const posts = await PostService.findPosts();

  res.status(200).json(posts);
}

async function findPost(req, res) {
  const { id } = req.params;

  const post = await PostService.findPost(id);

  res.status(200).json(post);
}

async function searchPosts(req, res) {
  const { q } = req.query;

  const posts = q ? await PostService.searchPosts(q) : await PostService.findPosts();

  res.status(200).json(posts);
}

async function createPost(req, res) {
  const { id: userId } = req.user;

  const newPost = await PostService.createPost({ ...req.body, userId });

  res.status(201).json(newPost);
}

async function updatePost(req, res) {
  const { id: userId } = req.user;

  const { id } = req.params;

  const updatedPost = await PostService.updatePost(id, userId, req.body);

  res.status(200).json(updatedPost);
}

async function deletePost(req, res) {
  const { id: userId } = req.user;

  const { id } = req.params;

  await PostService.deletePost(id, userId);

  res.status(204).end();
}

module.exports = {
  findPosts,
  findPost,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
};
