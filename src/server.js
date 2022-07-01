require('dotenv').config();
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../swagger.json');
const app = require('./api');
const { errorMiddleware } = require('./middlewares');
const { loginRoutes, userRoutes, categoriesRoutes, postRoutes } = require('./routes');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.PORT || 3000;

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));
