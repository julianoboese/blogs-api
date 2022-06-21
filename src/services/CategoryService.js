const { Category } = require('../database/models');

async function createCategory(categoryData) {
  const newCategory = await Category.create(categoryData);

  return newCategory;
}

module.exports = {
  createCategory,
};
