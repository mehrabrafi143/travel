var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){

	browserSync.init({
        notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/*.html',function(){
		browserSync.reload();
	});
	
	watch('./app/assets/style/**/*.css',function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js',function(){
		gulp.start('scriptRefresh');
	});
});


gulp.task('cssInject',['css'],function(){
	return gulp.src('./app/temp/styles/style.css')
	.pipe(browserSync.stream());
}); 

gulp.task('scriptRefresh',['scripts'],function(){
    browserSync.reload();
});

