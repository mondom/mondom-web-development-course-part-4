const postcss = require("gulp-postcss")
const gulp = require("gulp")


function css(done) {
	const plugins = [autoprefixer({ browsers: ["last 1 version"] }), cssnano()]
	gulp
		.src("./dist/css/*style.css")
		.pipe(postcss(plugins)).pipe(console.log('halo'))
		.pipe(gulp.dest("./dest"))
	done()
}

exports.css = css
