import gulp from 'gulp';
import rimraf from 'rimraf';
import run from 'run-sequence';
import shell from 'gulp-shell';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

// Building the code to be used for production
gulp.task('build', cb => {
  run('clean-client', 'webpack', cb);
});

/**
 * Development tasks
 */

gulp.task('default', cb => {
  run('build-dev', cb);
});

gulp.task('build-dev', shell.task(['webpack-dev-server --colors']));

gulp.task('clean-client', cb => {
  rimraf('./dist', cb);
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