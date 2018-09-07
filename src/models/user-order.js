'use strict';
module.exports = (sequelize, DataTypes) => {
  console.log('dt:'+JSON.stringify(DataTypes));
  const UserOrder = sequelize.define('UserOrder', {
    paymentAddress: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    tokensCount:  DataTypes.INTEGER
  }, {});
  return UserOrder;
};