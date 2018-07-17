module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // SASS Compile to minified SCC
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true,
        },
        files: {
          'assets/css/app.min.css' : 'src/scss/app.scss' //'destination' : 'source'
        },
      }
    },

    postcss: {
        options: {
            map: false,
            processors: [
                require('pixrem')(), //rem unit fallback
                require('autoprefixer')({
                    browsers: 'last 2 versions'
                }), //vendor prefixes
                require('cssnano')() //minify the result
            ]
        },
        dist: {
            src: 'assets/css/*.css'
        }
    },

    // JSHint
    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    //concat js files
    concat: {
        core: {
            src: ['src/js/app.js'],
            dest: 'src/js/compiled/compiled.js'
        }
    },

    // Uglify
    uglify: {
      my_target: {
        files: {
          'assets/js/app.min.js' : ['src/js/compiled/compiled.js']
        }
      }
    },


    // Watch for changes
    watch: {
      options: {
        livereload : true
      },
      grunt: {
        files: ['Gruntfile.js']
      },
      js: {
          files: ['src/js/*.js'],
          tasks: ['jshint', 'concat', 'uglify']
      },
      sass: {
        files: ['src/scss/*.scss', 'src/scss/**/*.scss'],
        tasks: ['sass', 'postcss', 'concat']
      },
    }
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Register tasks
  grunt.registerTask('build', [ 'sass', 'postcss', 'concat', 'uglify']);
  grunt.registerTask('default', ['build', 'watch']);

};
