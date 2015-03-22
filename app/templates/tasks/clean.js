'use strict';

var gulp = require('gulp');
var del = require('del');

// Clean up build artifacts
gulp.task('clean', function(done) {
	del(['./public/js/**', './public/css/**', './public/img/**'], done);
});

