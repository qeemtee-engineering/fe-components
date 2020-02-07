var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');

gulp.task('sass', function(done) {
  gulp
    .src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
  done();
});

gulp.task('cjs', function(done) {
  gulp.src('./css/**').pipe(gulp.dest('./lib/cjs'));
  gulp
    .src('./lib/cjs/**')
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('./lib/cjs'));
  done();
});

gulp.task('esm', function(done) {
  gulp.src('./css/**').pipe(gulp.dest('./lib/esm'));
  gulp
    .src('./lib/esm/**')
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('./lib/cjs'));
  done();
});

gulp.task('default', gulp.series('sass', 'cjs', 'esm'));
