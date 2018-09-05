//MYSQL
var sequelize = new Sequelize('bitgo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  let db = {};
  db.sequelize = sequelize;

  module.exports = db;