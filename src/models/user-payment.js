'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPayment = sequelize.define('UserPayment', {
    description: DataTypes.STRING,
    satoshi: DataTypes.STRING,
    orderId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  UserPayment.associate = function(models) {
    // associations can be defined here
  };
  return UserPayment;
};

