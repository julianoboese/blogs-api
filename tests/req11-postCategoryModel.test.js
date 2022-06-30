const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists, 
  checkThroughAssociation
} = require('./assets/helper');

describe("11 - Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'database', 'models', 'postCategory.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('PostCategory');

  checkPropertyExists(modelPath)(["postId","categoryId"]);

  checkThroughAssociation(modelPath)
    (['Category', 'BlogPost'])('belongsToMany')(['BlogPost', 'Category']);
});
