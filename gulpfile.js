const gulp = require('gulp');
const sass = require('gulp-sass');
const sasslint = require('gulp-sass-lint');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      watch: true,
      baseDir: 'dist'
    },
  })
});

gulp.task('sass-lint', function() {
  return gulp.src(['src/scss/**/*.scss'])
    .pipe(sasslint())
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
});

gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
      }
    ))
});
gulp.task('jquery', function() {
  return gulp.src(['src/js/jquery.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('jquery.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
        stream: true
      }
    ))
});

gulp.task('js', function() {
  return gulp.src(['src/js/index.js', 'src/js/slick.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
        stream: true
      }
    ))
});




gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
      }
    ))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*.{ttf,woff,eof,svg, woff2}')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function(){
  gulp.watch(['src/js/**/*.js', 'src/*.html', 'src/fonts/**/*', 'src/images/**/*', 'src/scss/**/*.scss'], gulp.series(['jquery', 'js', 'html', 'fonts', 'images', 'sass', "sass-lint"]));
});

gulp.task('default', gulp.series(['jquery', 'js', 'html', 'sass', 'sass-lint', 'fonts', 'images', gulp.parallel(['watch', 'browserSync'])]));

