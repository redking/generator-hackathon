'use strict';

var gulp = require('gulp');
var es = require('event-stream');
var handleError = require('./utils/handleError');

gulp.task('resources', function() {

  var favicon = gulp.src('./src/favicon.ico')
    .on('error', handleError)
    .pipe(gulp.dest('./public'));

  var images = gulp.src('./src/img/*.*')
    .on('error', handleError)
    .pipe(gulp.dest('./public/img'));

  var shims = gulp.src('./src/js/lib/*.js')
    .on('error', handleError)
    .pipe(gulp.dest('./public/js/lib'));

  return es.concat(favicon, images, shims);
});
