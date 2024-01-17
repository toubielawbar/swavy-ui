const gulp = require('gulp');

const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const rename = require('gulp-rename');

gulp.task('minify-css', () => {
  return gulp.src('source/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('minify-css'));

gulp.task('minify-js', () => {
  return gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('minify-js'));