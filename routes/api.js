var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express api' });
});

router.use('/account', require('./account'));

module.exports = router;
