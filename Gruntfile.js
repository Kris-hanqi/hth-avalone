module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.initConfig({
		preprocess : {
            multifile: {
                files: {
                    'src/index.processed.js': 'src/js/index.js'
                }
            }
		}
	});
	grunt.registerTask('default','preprocess');
};