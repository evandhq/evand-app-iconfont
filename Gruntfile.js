module.exports = function (grunt) {
    grunt.initConfig({
        webfont: {
            icons: {
                src: 'src/*.svg',
                dest: 'build',
                options: {
                    codepoints: {
                        // back: 0x62,             // b
                        // check: 0x63,            // c
                        // home: 0x68,             // h
                        // list: 0x6c,             // l
                        // logout: 0x7a,           // z
                        // money: 0x6d,            // m
                        // nav: 0x6e,              // n
                        // qr: 0x71,               // q
                        // times: 0x74,            // t
                        // wheel: 0x77,            // w
                        // circle: 0x64,           // d
                        // exclamation: 0x78,      // x
                    },
                    hashes: false,
                    types: ['eot', 'woff2', 'woff', 'ttf'],
                    fontFilename: 'Evandappicons',
                    font: 'Evandappicons',
                    templateOptions: {
                        baseClass: 'evand',
                        classPrefix: 'evand-'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);
};
