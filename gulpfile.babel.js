import gulp from 'gulp';
import rimraf from 'rimraf';
import run from 'run-sequence';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import shell from 'gulp-shell';
import minifyCss from 'gulp-minify-css';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const paths = {
  clientDest  : './app',
  sassSrc     : ['./src/sass/**/*.scss']
};

// Building the code to be used for production
gulp.task('build', cb => {
  run('clean-client', 'webpack', 'sass', cb);
});

/**
 * Development tasks
 */

gulp.task('default', cb => {
  run('build-dev', cb);
});

gulp.task('build-dev', cb => {
  run('build', 'watch-webpack', 'watch-sass', cb);
});

gulp.task('build-sven', shell.task(['webpack-dev-server & gulp watch-sass']));

gulp.task('clean-client', cb => {
  rimraf(paths.clientDest, cb);
});

gulp.task('sass', cb => {
  gulp.src(paths.sassSrc)
  .pipe(plumber())
  .pipe(sass())
  .pipe(concat('styles.css'))
  .pipe(minifyCss())
  .pipe(gulp.dest(paths.clientDest))
  cb();
});

gulp.task('webpack', cb => {
  webpack(webpackConfig, (err, stats) => {
    if(err) {
      console.log(err);
      process.exit(1);
    }

    cb();
  });
});

/**
 * Watch tasks
 */

gulp.task('watch-webpack', cb => {
  gulp.watch(['src/js/**/*.*'], ['webpack']);
  cb();
});

gulp.task('watch-sass', cb => {
  gulp.watch(['src/sass/**/*.*'], ['sass']);
  cb();
});