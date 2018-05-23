var gulp = require('gulp'),
postcss = require('gulp-postcss');
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'); 
cssImport = require('postcss-import'),
hexrgba = require('postcss-hexrgba');


gulp.task('css',function(){
	return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssImport,mixins,cssvars,nested,hexrgba,autoprefixer]))
    .on('error',function(error){
        console.log(error.toString());
        this.emit('end');
    })
	.pipe(gulp.dest('./app/temp/styles'));
});
 