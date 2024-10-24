'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const BaseModel = require('../utils/BaseModel');
const Role = require('./roleModel');

const User = BaseModel.init({
  npm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  actived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "role_id",
    defaultValue: 2,
    references: {
      model: Role,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'User',
});

User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;
