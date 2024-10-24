'use strict';

const createPagination = (page, size, totalElements) => {
  const totalPages = Math.ceil(totalElements / size);
  const isFirst = page === 1;
  const isLast = page === totalPages;
  return { page, size, isFirst, isLast, totalElements, totalPages };
};

const createResponse = (message, status, data = null) => ({ message, status, data });

const successResponse = (res, message, data, status = 200, pagination = null) => {
  if (pagination !== null) {
    return res.status(status).json({
      message,
      status,
      pagination: createPagination(
        pagination.page,
        pagination.size,
        pagination.totalElements,
      ),
      data,
    });
  }
  return res.status(status).json(createResponse(message, status, data));
};

const errorResponse = (res, message, status = 500) => {
  return res.status(status).json(createResponse(message, status));
};

module.exports = { successResponse, errorResponse };
