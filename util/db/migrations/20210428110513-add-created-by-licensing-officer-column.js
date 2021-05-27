'use strict';
const databaseConfig = require('../../../src/config/database.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      {
        schema: databaseConfig.database.schema,
        tableName: 'Registrations'
      },
      'createdByLicensingOfficer',
      Sequelize.BOOLEAN
    );
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      {
        schema: databaseConfig.database.schema,
        tableName: 'Registrations'
      },
      'createdByLicensingOfficer'
    );
  }
};
