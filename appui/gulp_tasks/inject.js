const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const gulpInject = require('gulp-inject');
const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

function inject() {
  const injectScripts = gulp.src([
    conf.path.tmp('application.js'),
    conf.path.tmp('**/*.js')
  ]);

  const injectStyles = gulp.src([
      conf.path.tmp('**/*.css'),
      conf.path.tmp('app/*.css')
  ]);

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

    return gulp.src(conf.path.src('index.html'))
        .pipe(gulpInject(injectScripts, injectOptions))
        .pipe(gulpInject(injectStyles, injectOptions))
        .pipe(wiredep(Object.assign({}, conf.wiredep)))
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
}
