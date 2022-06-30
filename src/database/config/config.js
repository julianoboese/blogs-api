require('dotenv').config();

module.exports = {
  development: {
    host: process.env.HOSTNAME || process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: `${process.env.MYSQL_DB_NAME}-dev`,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: process.env.DEBUG !== 'false',
  },
  test: {
    host: process.env.HOSTNAME || process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: `${process.env.MYSQL_DB_NAME}-test`,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: process.env.DEBUG !== 'false',
  },
  production: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB_NAME,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    dialect: 'postgres',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: process.env.DEBUG !== 'false',
  },
};
