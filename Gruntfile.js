/*
 * grunt-selector4096
 * https://github.com/hail2u/grunt-selector4096
 *
 * Copyright (c) 2013 Kyo Nagashima
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    selector4096: {
      ok: [
        'test/fixtures/100.css',
        'test/fixtures/2047.css'
      ],
      warn: [
        'test/fixtures/2048.css',
        'test/fixtures/4095.css'
      ]
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['selector4096', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);
};
