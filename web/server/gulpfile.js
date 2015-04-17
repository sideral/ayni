var gulp = require('gulp'),
  concat = require('gulp-concat'),
  path   = require('path'),
  clientDir = path.join(__dirname, '../client'),
  componentDir = clientDir + '/bower_components';


gulp.task('vendor.js', function () {
  return gulp.src([
    componentDir + '/jquery/dist/jquery.js',
    componentDir + '/foundation/js/foundation.js'
  ]).pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('vendor.css', function () {
  return gulp.src([
    componentDir + '/foundation/css/normalize.css',
    componentDir + '/foundation/css/foundation.css'
  ]).pipe(concat('vendor.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('vendor', ['vendor.js', 'vendor.css']);
