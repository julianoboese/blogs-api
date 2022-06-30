const { resolve } = require('path');

const { 
  checkModelFile, 
  checkModelName, 
  checkPropertyExists 
} = require('./assets/helper');

describe("2 - Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas", () => {
  const modelPath = resolve(__dirname, '..', 'src', 'database', 'models', 'user.js');
  
  checkModelFile(modelPath);

  checkModelName(modelPath)('User');

  checkPropertyExists(modelPath)(["id","displayName","email","password","image"]);
});
