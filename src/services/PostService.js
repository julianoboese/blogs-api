const Sequelize = require('sequelize');
const createError = require('http-errors');
const config = require('../database/config/config');
const { Category, BlogPost, PostCategory } = require('../database/models');

const sequelize = new Sequelize(config.development);

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

module.exports = {
  createPost,
};