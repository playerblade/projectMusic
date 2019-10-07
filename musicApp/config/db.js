const Sequelize = require('sequelize');
module.exports = new Sequelize('music', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'/*|'sqlite'|'postgres'|'mssql'*/,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});