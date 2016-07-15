module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      compress: {
        files: {
          'dist/compress.js': ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};
