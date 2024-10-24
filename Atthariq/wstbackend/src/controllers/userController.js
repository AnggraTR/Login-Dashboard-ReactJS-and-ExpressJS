'use strict';

const userService = require('../services/userService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return successResponse(res, 'Users retrieved successfully', users);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return successResponse(res, 'User created successfully', user);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    return successResponse(res, 'User updated successfully', user);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    return successResponse(res, 'User deleted successfully', null);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getUserByEmailOrName = async (req, res) => {
  try {
    const users = await userService.getUserByEmailOrName(req.query);
    return successResponse(res, 'Users retrieved successfully', users);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUserByEmailOrName };
