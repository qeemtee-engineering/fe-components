var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var replace = require('gulp-replace');

gulp.task('sass', function () {
  return gulp
    .src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('cjs', function () {
  return gulp.src('./css/**').pipe(gulp.dest('./lib/cjs'));
});

gulp.task('cjs-replace', function () {
  return gulp.src('./lib/cjs/**').pipe(replace('.scss', '.css')).pipe(gulp.dest('./lib/cjs'));
});

gulp.task('esm', function () {
  return gulp.src('./css/**').pipe(gulp.dest('./lib/esm'));
});

gulp.task('esm-replace', function () {
  return gulp.src('./lib/esm/**').pipe(replace('.scss', '.css')).pipe(gulp.dest('./lib/esm'));
});

gulp.task('submodules', function () {
  return gulp
    .src(['./lib/**', '!./lib/dist/**', '!./lib/cjs/**', '!./lib/esm/**'])
    .pipe(replace('.js"', '"'))
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', gulp.series('sass', 'cjs', 'cjs-replace', 'esm', 'esm-replace', 'submodules'));
