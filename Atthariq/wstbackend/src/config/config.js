'use strict';

const dotenv = require('dotenv');

dotenv.config();

const config = {
  db: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  port: process.env.PORT,
};

module.exports = config;
