"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const User = require("../models/userModel");
const { successResponse, errorResponse } = require("../utils/responseHelper");
const { formatUserResponse } = require('../response/userResponse');

const register = async (req, res) => {
  try {
    const { npm, name, email, password, username, roleId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      npm,
      name,
      email,
      username,
      password: hashedPassword,
      actived: true,
      roleId: roleId || 2,
      createdBy: 'system',
      updatedBy: 'system'
    });
    return successResponse(res, "User registered successfully", user, 201);
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username: username }, { email: username }],
      },
    });

    if (!user) {
      return errorResponse(res, "Invalid username/email", 400);
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return errorResponse(res, "Invalid password", 400);
    }

    const token = jwt.sign(
      formatUserResponse(user),
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return successResponse(res, "Login successful", {
      token,
      user: formatUserResponse(user),
    });
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

module.exports = { register, login };
