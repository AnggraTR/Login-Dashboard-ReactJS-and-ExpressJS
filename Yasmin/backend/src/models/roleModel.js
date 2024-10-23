'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const BaseModel = require('../utils/BaseModel');

const Role = BaseModel.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Role',
});

module.exports = Role;
