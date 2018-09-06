'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymantRequest = sequelize.define('PaymantRequest', {
    address: DataTypes.STRING,
    user_id: DataTypes.NUMBER
  }, {});
  PaymantRequest.associate = function(models) {
    // associations can be defined here
  };
  return PaymantRequest;
};