const CategoryService = require('../services/CategoryService');

async function createCategory(req, res) {
  const newCategory = await CategoryService.createCategory(req.body);

  res.status(201).json(newCategory);
}

module.exports = {
  createCategory,
};