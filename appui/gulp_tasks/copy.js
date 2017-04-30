const gulp = require('gulp');
const browserSync = require('browser-sync');

const conf = require('../conf/gulp.conf');

gulp.task('copy', copy);

function copy() {
    return gulp.src(conf.paths.src + '/app/images/*.png')
        .pipe(gulp.dest(conf.paths.tmp + '/app/images/'))
        .pipe(browserSync.stream());
}
