'use strict';

const User = require('../models/userModel');
const { Op } = require('sequelize');

const getAllUsers = async () => {
  return await User.findAll({ where: { deleted: false } });
};

const createUser = async (userData) => {
  return await User.create(userData);
};

const updateUser = async (id, userData) => {
  return await User.update(userData, { where: { id, deleted: false } });
};

const deleteUser = async (id) => {
  return await User.update({ deleted: true }, { where: { id } });
};

const getUserByEmailOrName = async (query) => {
  return await User.findAll({
    where: {
      deleted: false,
      [Op.or]: [
        { email: query.email },
        { name: query.name }
      ]
    }
  });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUserByEmailOrName };
