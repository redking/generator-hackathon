'use strict';

var express = require('express');
var url = require('url');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res) {
  var originalUrl = req.protocol + '://' + req.get('host') + url.parse(req.url).pathname;
  res.render('index', {
    originalUrl: originalUrl,
    title: 'Hack for Equality - <%= appname %>'
  });
});

module.exports = router;
