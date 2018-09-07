'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserPayments', [{
      description: 'test seed',
      satoshi: '10000',
      orderId: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserPayments', null, {});
  }
};
