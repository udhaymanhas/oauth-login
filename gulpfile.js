var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app',
        }
    });
});

gulp.task('develop', ['browserSync'], function() {
    //live-reload on change
    gulp.watch('app/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/views/**/*.css', browserSync.reload);
    gulp.watch('app/views/**/*.html', browserSync.reload);
    gulp.watch('app/*.js', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
});
