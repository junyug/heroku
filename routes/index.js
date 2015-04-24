var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Today is yestoday,Study anywhere……', msg: "Are you know ignorance?" });
});

module.exports = router;
