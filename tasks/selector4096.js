/*
 * grunt-selector4096
 * https://github.com/hail2u/grunt-selector4096
 *
 * Copyright (c) 2013 Kyo Nagashima
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var count = require('./lib/css.js').countSelector;

module.exports = function (grunt) {
  var taskName = 'selector4096';
  var taskDescription = 'Warn if CSS file has more than equal 4096 selecors.';

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var done = this.async();

    async.forEach(this.filesSrc, function (file, next) {
      if (!grunt.file.exists(file)) {
        grunt.log.warn('Source file "' + file + '" not found.');

        return next();
      }

      var num = count(grunt, file);

      if (num > 4095) {
        grunt.fail.warn('File "' + file + '" had ' + num +
          ' selectors. Split to avoid bug on ~IE9.');
      }

      if (num > 2047) {
        grunt.log.error('File "' + file + '" had ' + num +
          ' selectors. Not bad, but not good either.');

        return next();
      }

      grunt.log.writeln('File "' + file + '" had ' + num +
        ' selectors. Looks good.');
      next();
    }, function (err) {
      done(err);
    });
  });
};
