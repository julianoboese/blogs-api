const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists, 
  checkSimpleAssociation
} = require('./assets/helper');

describe("10 - Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'database', 'models', 'blogPost.js');
  const foreignModelPath = resolve(__dirname, '..', 'src', 'database', 'models', 'user.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('BlogPost');

  checkPropertyExists(modelPath)(["id","title","content","userId","published","updated"]);

  checkSimpleAssociation(modelPath)('belongsTo')('User');

  checkSimpleAssociation(foreignModelPath)('hasMany')('BlogPost');
});
