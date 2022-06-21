const { Category } = require('../database/models');

async function findCategories() {
  const categories = await Category.findAll();

  return categories;
}

async function createCategory(categoryData) {
  const newCategory = await Category.create(categoryData);

  return newCategory;
}

module.exports = {
  findCategories,
  createCategory,
};
