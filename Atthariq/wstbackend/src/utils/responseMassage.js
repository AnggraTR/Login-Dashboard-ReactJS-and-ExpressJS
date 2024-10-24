'use strict';

const responseMessage = {
  PROCESS_SUCCESS: { message: 'Process Success', status: 200 },
  INVALID_DATA: { message: 'Invalid Data', status: 400 },
  UNAUTHORIZED: { message: 'Unauthorized', status: 401 },
  INVALID_TOKEN: { message: 'Invalid Token', status: 400 },
  FORBIDDEN: { message: 'Forbidden', status: 403 },
  NOT_FOUND: { message: 'Not Found', status: 404 },
  INTERNAL_SERVER_ERROR: { message: 'Internal Server Error', status: 500 },
  BAD_REQUEST: { message: 'Bad Request', status: 400 },
  CONFLICT: { message: 'Conflict', status: 409 },
  UNPROCESSABLE_ENTITY: { message: 'Unprocessable Entity', status: 422 },
  TOO_MANY_REQUESTS: { message: 'Too Many Requests', status: 429 },
  SERVICE_UNAVAILABLE: { message: 'Service Unavailable', status: 503 },
};

module.exports = responseMessage;
