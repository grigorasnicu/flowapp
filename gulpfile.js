var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var del = require('del'),
    ngannotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rev = require('gulp-rev'),
    minifycss = require('gulp-minify-css');

// destination directory
var assets_dir = 'app/assets';

// Clean
gulp.task('clean', function () {
    return del([assets_dir], {force: true});
});

// Copy project
gulp.task('copy', ['clean'], function () {
    gulp.src('bower_components/**/*')
        .pipe(gulp.dest(assets_dir));

});

gulp.task('usemin', function () {
    return gulp.src('app/index.html')
        .pipe(usemin({
            css: [minifycss(), rev()],
            js: [ngannotate(), uglify(), rev()]
        }))
        .pipe (gulp.dest(dist_dir));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app',
            index: 'index.html'
        }
    })
});

gulp.task('jshint', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('app/style'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('start', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/*.scss', ['sass'])
    gulp.watch('app/scripts/*.js', browserSync.reload)
    gulp.watch('app/views/*.html', browserSync.reload)
    gulp.watch('app/*.html', browserSync.reload)
});
