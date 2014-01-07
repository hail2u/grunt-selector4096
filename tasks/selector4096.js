/*
 * grunt-selector4096
 * https://github.com/hail2u/grunt-selector4096
 *
 * Copyright (c) 2013 Kyo Nagashima
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var taskName = 'selector4096';
  var taskDescription = 'Warn if CSS file has more than equal 4096 selectors.';

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var async = require('async');
    var count = require('./lib/css.js').countSelector;

    var done = this.async();

    async.each(this.filesSrc, function (file, callback) {
      if (!grunt.file.exists(file)) {
        grunt.log.warn('Source file "' + file + '" not found.');

        return callback();
      }

      var num = count(grunt, file);

      if (num > 4095) {
        grunt.fail.warn('File "' + file + '" had ' + num +
          ' selectors. Split to avoid bug on ~IE9.');
      }

      if (num > 2047) {
        grunt.log.error('File "' + file + '" had ' + num +
          ' selectors. Not bad, but not good either.');

        return callback();
      }

      grunt.log.ok('File "' + file + '" had ' + num +
        ' selectors. Looks good.');
      callback();
    }, function (err) {
      done(err);
    });
  });
};
