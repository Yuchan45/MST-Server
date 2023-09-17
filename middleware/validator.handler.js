const { validationResult } = require('express-validator');
const boom = require('@hapi/boom');

function validatorHandler(schema) {
  return async (req, res, next) => {
    await Promise.all(schema.map((validation) => validation.run(req)));
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const validationErrors = errors.array().map((error) => {
        return error.msg;
      });
      const boomError = boom.badRequest(validationErrors);
      next(boomError);
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
