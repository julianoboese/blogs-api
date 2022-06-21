const CategoryService = require('../services/CategoryService');

async function findCategories(_req, res) {
  const categories = await CategoryService.findCategories();

  res.status(200).json(categories);
}

async function createCategory(req, res) {
  const newCategory = await CategoryService.createCategory(req.body);

  res.status(201).json(newCategory);
}

module.exports = {
  findCategories,
  createCategory,
};