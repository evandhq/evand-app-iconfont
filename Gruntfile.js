var chars = 'ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو؟كيؤئژأآة«»ءٓٔ۱۲۳۴۵۶۷۸۹۰'.split('');
var fs = require('fs');

function charCode(c) {
    return c.charCodeAt(0);
}

var fileChars = fs
    .readdirSync(__dirname + '/src')
    .filter(fileName => /\.svg/.test(fileName))
    .map(fileName => fileName.replace('.svg', ''))
    .map(name => [name, chars.pop()]);

var mapNameToChars = fileChars.reduce((prev, curr) => {
    prev[curr[0]] = curr[1];
    return prev;
}, {});

var mapNameToCodePoints = fileChars.reduce((prev, curr) => {
    prev[curr[0]] = charCode(curr[1]);
    return prev;
}, {});

fs.writeFileSync(__dirname + '/build/EvandAppIcons.json', JSON.stringify(mapNameToChars));

module.exports = function (grunt) {
    grunt.initConfig({
        webfont: {
            icons: {
                src: 'src/*.svg',
                dest: 'build',
                options: {
                    codepoints: mapNameToCodePoints,
                    hashes: false,
                    types: ['eot', 'woff2', 'woff', 'ttf'],
                    fontFilename: 'EvandAppIcons',
                    font: 'EvandAppIcons',
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
