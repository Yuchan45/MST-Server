'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      
    }
  }

  Client.init(
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      //   allowNull: false,
      // },
      // contract_type_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Contract',
      //     key: 'id',
      //   },
      // },
      // case_number: {
      //   type: DataTypes.STRING(255),
      //   allowNull: false,
      // },
      // salesforce_id: {
      //   type: DataTypes.STRING(35),
      //   allowNull: true,
      // },
      // created_at: {
      //   type: DataTypes.DATE,
      //   defaultValue: DataTypes.NOW,
      // },
    },
    {
      sequelize,
      modelName: 'Client',
      tableName: 'case',
      timestamps: false,
    }
  );

  return Client;
};
