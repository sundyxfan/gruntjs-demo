module.exports = function (grunt) {
 
    grunt.initConfig({
        less: {
            // Ñ¹Ëõ
            yuicompress: {
                files: {
                    './css/main-min.css': './css/main.css'
                },
                options: {
                    yuicompress: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['./css/*.css'],
                tasks: ['less']
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default', ['less', 'watch']);
 
};
