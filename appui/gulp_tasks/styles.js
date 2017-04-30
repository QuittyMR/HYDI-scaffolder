const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('styles', styles);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function styles() {
  return gulp.src([
    path.join(conf.paths.src, '**/*.css'),
  ])
    .pipe(gulp.dest(conf.paths.tmp));
}
