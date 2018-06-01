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
          'assets/css/styles.min.css' : 'src/scss/styles.scss' //'destination' : 'source'
        }
      }
    },

    // Autoprefixer
    autoprefixer: {
      my_target: {
        files: {
          'assets/css/styles.min.css' : 'src/scss/styles/scss'
        }
      }
    },

    // JSHint
    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    // Concat
    concat: {
      cs: {
        src: ['src/scss/styles.scss', 'src/vendor/slick/*.scss'],
        dest: 'assets/css/styles.min.css'
      },
      js: {
        src: ['src/js/*.js', 'src/vendor/slick/slick.js'],
        dest: 'assets/js/scripts.js'
      }
    },



    // Uglify
    uglify: {
      my_target: {
        files: {
          'assets/js/scripts.min.js' : ['src/js/scripts.js']
        }
      }
    },


    // Watch for changes
    watch: {
      options: {
        livereload : true
      },
      grunt: {
        files: ['Gruntfile.js', 'templates/*.html', '*.php', 'views/*.php']
      },
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['jshint', 'concat', 'uglify', 'sass']
      }
    }

  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Register tasks
  grunt.registerTask('build', [ 'jshint', 'concat', 'sass', 'uglify']);
  grunt.registerTask('default', ['build', 'watch']);

};
