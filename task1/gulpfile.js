var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  /* var files = [
        '*.html',
        '*.css',
        '*.png',
        '*.js',
        '*.less',
    ];*/    
    
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false,
    });
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch('*.html', browserSync.reload);  
    gulp.watch('*.css', browserSync.reload);
    gulp.watch('*.png', browserSync.reload);
    gulp.watch('*.js', browserSync.reload); 
    gulp.watch('*.less', browserSync.reload); 
});



  
