'use strict';

const { errorResponse } = require('../utils/responseHelper');

const badRequest = (requiredParams) => {
  return (req, res, next) => {
    const missingParams = requiredParams.filter(param => !req.body[param]);

    // Jika ada parameter yang hilang, kembalikan respons dengan pesan yang sesuai
    if (missingParams.length > 0) {
      return errorResponse(res, `${missingParams.join(', ')} is required.`, 400);
    }

    // Jika semua parameter ada, lanjutkan ke middleware berikutnya
    next();
  };
};

module.exports = badRequest;
