var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var browserSync =require('browser-sync');

gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './',
            index  : './index.html'
        }
    });
});

gulp.task('browser-reload', function () {
    browserSync.reload();
});

gulp.task('build', ['scripts', 'styles'], function () {
    gulp.src(['./index.html', './css/*', './images/*', './js/scripts.min.js', './README.pdf'], { base : './'})
    .pipe(gulp.dest('../uttttti.github.io'))

});

gulp.task('watch', ['scripts', 'styles', 'browser-sync'], function() {
    gulp.watch('./*.html', ['browser-reload']);
    gulp.watch('./images/*', ['browser-reload']);
    gulp.watch('./js/*.js', ['scripts', 'browser-reload']);
    gulp.watch('./scss/*.scss', ['styles', 'browser-reload']);
});
