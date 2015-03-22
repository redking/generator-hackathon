'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var handleError = require('./utils/handleError');

var isDebug = (process.env.NODE_ENV !== 'production');

// External libraries that should be included in a separate vendors.js bundle
var externals = [<% if (hasJquery) { %>
  'jquery'<% } %><% if (hasReact) { %>,
  'classnames',
  'react',
  'react/addons'<% if (hasBootstrap) { %>,
  'react-bootstrap'<% } %><% } %>
];

var vendorBundler = browserify({
  // Enable source maps
  debug: isDebug,
  transform: ['envify']
});

var appBundler = browserify({
  // Required watchify args
  cache: {}, packageCache: {}, fullPaths: true,
  // Specify the entry point of your app
  entries: ['./src/js/app.js'],
  // Add file extensions to make optional in your requires
  extensions: [<% if (hasReact) { %>'.jsx',<% } %> '.js'],
  // Enable source maps!
  debug: isDebug,
  transform: [<% if (hasReact) { %>'reactify',<% } %> 'envify']
});

externals.forEach(function(ext) {
  vendorBundler.require(ext);
  appBundler.external(ext);
});

var rebundle = function () {
  var start = Date.now();
  console.log('Building dev bundle');
  appBundler.bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'))
    .on('end', function (){
      console.log('App bundle built in ' + (Date.now() - start) + 'ms');
    });
};

gulp.task('browserify', function() {
  var start = Date.now();
  vendorBundler.bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest('./public/js'))
    .on('end', function (){
      console.log('Vendor bundle built in ' + (Date.now() - start) + 'ms');
    });

  if (isDebug) {
    appBundler = watchify(appBundler);
    // Rebundle with watchify on changes.
    appBundler.on('update', rebundle);
    rebundle();
  } else {
    rebundle();
  }
});
