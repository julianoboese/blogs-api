const Sequelize = require('sequelize');
const createError = require('http-errors');
const { Op } = require('sequelize');
const config = require('../database/config/config');
const { User, Category, BlogPost, PostCategory } = require('../database/models');

const sequelize = new Sequelize(config[process.env.NODE_ENV]);

async function findPosts() {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  return posts;
}

async function findPost(id) {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  if (!post) throw new createError.NotFound('Post does not exist');

  return post;
}

async function searchPosts(searchTerm) {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  where: { [Op.or]: [
    { title: { [Op.substring]: searchTerm } },
    { content: { [Op.substring]: searchTerm } },
  ] } });

  return posts;
}

async function createPost(postData) {
  const { categoryIds } = postData;

  const categoriesCount = await Category.count({ where: { id: categoryIds } });

  if (!categoriesCount) throw new createError.BadRequest('"categoryIds" not found');

  const newPost = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create(postData, { transaction: t });

    categoryIds.forEach(async (category) => {
      await PostCategory.create({ postId: post.id, categoryId: category });
    });
      
    return post;
  });

  return newPost;
}

async function updatePost(id, userId, postData) {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  if (userId !== post.user.id) throw new createError.Unauthorized('Unauthorized user');

  const { title, content } = postData;
  
  await post.update({ title, content });

  return post;
}

async function deletePost(id, userId) {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  if (!post) throw new createError.NotFound('Post does not exist');

  if (userId !== post.user.id) throw new createError.Unauthorized('Unauthorized user');

  await post.destroy();
}

module.exports = {
  findPosts,
  findPost,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
};
