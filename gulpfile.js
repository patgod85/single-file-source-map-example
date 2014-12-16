var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var singleFileSourceMap = require('./single-file-source-map');

var jsFiles = './src/**/*.js';

gulp.task('default', function() {
    gulp.src(jsFiles)
        .pipe(gulp.dest('./build/'))
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(singleFileSourceMap.afterUglify())
            .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.', {sourceRoot:'.', includeContent: false}))
        .pipe(gulp.dest('./build/'))
        .pipe(singleFileSourceMap.afterDest());
});

