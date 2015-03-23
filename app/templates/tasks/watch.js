'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/css/*.*', ['css']);
  gulp.watch('src/img/**/*.*', ['resources']);
  gulp.watch('src/js/lib/**/*.js', ['resources']);
});
