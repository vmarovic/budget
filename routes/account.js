var express = require('express');
var expressJoi = require('express-joi');
var router = express.Router();

var newAccountSchema = {
  name: expressJoi.Joi.types.String().required()
};

var idSchema = {id: expressJoi.Joi.types.Number().required()};

router.route('/')
.put(expressJoi.joiValidate(newAccountSchema), createHandler)
.get(getAllHandler);

router.route('/:id')
.get(expressJoi.joiValidate(idSchema), getOneHandler)
.post(expressJoi.joiValidate(idSchema), updateHandler)

// Create account
function createHandler(req, res, next) {
  console.log('This is put request');
  db.models.account.create(req.body)
  .then(function (account) {
    return res.send(account);
  }).catch(next)
}

// Get all accounts
function getAllHandler(req, res, next) {
  db.models.account.findAll({})
  .then(function (accounts) {
    return res.send(accounts);
  }).catch(next)
}

// Get one handler
function getOneHandler(req, res, next) {
  db.models.account.findById(req.params.id)
  .then(function (account) {
    return res.send(account);
  }).catch(next);
}

// Get one handler
function updateHandler(req, res, next) {
  db.models.account.findById(req.params.id)
  .then(function (account) {
    account.name = req.body.name;
    return account.save();
  })
  .then(function (account) {
    res.send(account);
  }).catch(next);
}

module.exports = router;
