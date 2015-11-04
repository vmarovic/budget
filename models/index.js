var Sequelize = require('sequelize');
var Promise = require('bluebird');

// Connect to database
var db = new Sequelize('budget', 'vladimir', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {max: 5, min: 0, idle: 1000}
});

var modelNames = ['account'];

Promise.map(modelNames, function (modelName) {
  return require('./' + modelName)(db);
});

module.exports = db;
