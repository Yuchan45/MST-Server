const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clients.controller');

//Import validations schemas
const {
  validateCreateClient,
  validateLogInClient,
  validateGetAbsoluteValues,
  validateFulfilled,
  validateGetComments,
  validateDeleteComments,
  validateUpsertComments,
} = require('../schemas/clientsValidation.schema');

//Import middleware for schemas validation
const validatorHandler = require('../middleware/validator.handler');

// Routing
router.get('/', clientsController.index);


module.exports = router;
