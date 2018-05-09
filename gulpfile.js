var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss');
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'); 
cssImport = require('postcss-import')

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
});


gulp.task('css',function(){
	return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssImport,mixins,cssvars,nested,autoprefixer]))
    .on('error',function(error){
        console.log(error.toString());
        this.emit('end');
    })
	.pipe(gulp.dest('./app/temp/styles'));
});
 



gulp.task('cssInject',['css'],function(){
	return gulp.src('./app/temp/styles/style.css')
	.pipe(browserSync.stream());
}); 
