const Sequelize = require('sequelize');
const createError = require('http-errors');
const config = require('../database/config/config');
const { User, Category, BlogPost, PostCategory } = require('../database/models');

const sequelize = new Sequelize(config.development);

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
  
  post.update({ title, content });

  return post;
}

module.exports = {
  findPosts,
  findPost,
  createPost,
  updatePost,
};
