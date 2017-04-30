const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('default', gulp.series('clean', 'package'));
gulp.task('package', gulp.series(gulp.parallel('styles', 'partials', 'scripts'), 'inject', 'build'));

gulp.task('serve', gulp.series('clean', 'copy', 'inject', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));

gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch([
    conf.path.src('index.html'),
    'bower.json'
  ], gulp.parallel('inject'));

  gulp.watch(conf.path.src('app/**/*.html'), gulp.series('partials', reloadBrowserSync));
  gulp.watch([
    conf.path.src('**/*.less'),
    conf.path.src('**/*.css')
  ], gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('inject'));
  done();
}
