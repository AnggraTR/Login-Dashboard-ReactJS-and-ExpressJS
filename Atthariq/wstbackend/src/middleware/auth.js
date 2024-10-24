'use strict';

const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/responseHelper");
const User = require("../models/userModel");
const responseMessage = require("../utils/responseMassage");

const auth = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return errorResponse(
      res,
      responseMessage.UNAUTHORIZED.message,
      responseMessage.UNAUTHORIZED.status
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      where: { id: decoded.id, actived: true, deleted: false },
    });
    if (!user) {
      return errorResponse(
        res,
        responseMessage.INVALID_TOKEN.message,
        responseMessage.INVALID_TOKEN.status
      );
    }

    req.user = user;
    req.user = decoded;
    next();
  } catch (ex) {
    return errorResponse(
      res,
      responseMessage.INVALID_TOKEN.message,
      responseMessage.INVALID_TOKEN.status
    );
  }
};

module.exports = auth;
