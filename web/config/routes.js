var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ayni' });
});

router.get('/ask', function(req, res, next) {
  res.render('ask');
});

module.exports = router;
