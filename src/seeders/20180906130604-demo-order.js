'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserOrders', [{
        paymentAddress: '2NDP75r58XqKmExDw4jEedG4PCTV5LrJKqF' ,
        userId: 1,
        tokensCount: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserOrders', null, {});
  }
};
