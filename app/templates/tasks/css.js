'use strict';

var gulp = require('gulp');
var handleError = require('./utils/handleError');<% if (cssLanguage === 'less') { %>
var less = require('gulp-less');<% } %>

gulp.task('css', function () {
  return gulp.src('src/css/*.*')
    .on('error', handleError)<% if (cssLanguage === 'less') { %>
    .pipe(less())<% } %>
    .pipe(gulp.dest('./public/css'));
});
