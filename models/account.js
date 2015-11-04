var Sequelize = require('sequelize');

module.exports = function (db) {
  var Account = db.define('account', {
    name: Sequelize.STRING
  }
);

  return Account.sync({force: false});
}
