'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var mocha = require('gulp-spawn-mocha');
var buffer = require('vinyl-buffer');
var rename =require('gulp-rename');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('browserify', function () {
  var b = browserify({
    entries: ['./src/index.js'],
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });
  // set up the browserify instance on a task basis
  return b.bundle()
    .pipe(source('src/index.js'))
    .pipe(buffer())
    .pipe(rename('date-fp.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('spec',function () {
  return gulp.src([
      'src/**/_spec/*.js',
    ])
    .pipe(mocha({
      compilers: 'js:babel/register',
      reporter: 'dot',
    }));
});


gulp.task('watch', ['spec'], function () {
  gulp.watch(['src/**/*.js'], ['spec']);
});

gulp.task('default', ['browserify']);
