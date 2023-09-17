const boom = require('@hapi/boom');
const { sequelize } = require('../models/index');
const db = require('../models');

const clientServices = require('../services/clients.services');

const clientsController = {
  index: async (req, res, next) => {
    return res.status(200).json({ message: "Hello world!" });
  }
};

module.exports = clientsController;
