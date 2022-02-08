module.exports = function(grunt) {

    grunt.initConfig({  
      responsive_images: {
        dev: {
          options: {
            engine: 'gm',
            sizes: [{
              width: 1600,
              suffix: '_large_2x',
              quality: 30
            },
            {
              width: 800,
              suffix: '_large_1x',
              quality: 50
            },
            {
              suffix: '_medium',
              width: 600,
              quality: 50
           },
          {
              suffix: "_mall",
              width: 320,
              quality: 50
          }]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'src-images/',
            dest: 'images/'
          }]
        }
      },
     
    });
  
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
  
  };