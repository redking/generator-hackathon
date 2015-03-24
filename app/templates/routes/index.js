'use strict';

var express = require('express');
var url = require('url');
var router = express.Router();

// Index
router.get('/', function(req, res) {
  var originalUrl = req.protocol + '://' + req.get('host') + url.parse(req.url).pathname;
  res.render('index', {
    originalUrl: originalUrl,
    //layout: 'layouts/foo' // uncomment this line if you want to use another layout
    title: 'Hack for Equality - <%= appname %>'
  });
});

module.exports = router;
