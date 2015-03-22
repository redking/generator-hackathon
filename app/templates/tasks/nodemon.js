'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
    script: './bin/www.js',
    ext: 'hbs js',
    env: { 'NODE_ENV': 'development' },
    ignore: ['.git', 'src', 'public', 'node_modules'],
    nodeArgs: ['--debug']
  }).on('restart', function() {
    console.log('Restarted server!');
  });
});