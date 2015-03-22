'use strict';

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res) {
  var originalUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index', {
    originalUrl: originalUrl,
    title: 'Hack for Equality - <%= appname %>'
  });
});

module.exports = router;
