var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '人人网开发资源库', msg: "人人网开源工具库，提供常用工具及一切效果代码" });
});

module.exports = router;
