/*
 * grunt-selector4096
 * https://github.com/hail2u/grunt-selector4096
 *
 * Copyright (c) 2013 Kyo Nagashima
 * Licensed under the MIT license.
 */

var parse = require('css-parse');

exports.countSelector = function (grunt, file) {
  var css = parse(grunt.file.read(file)).stylesheet;
  var num = 0;

  for (var i = 0, l = css.rules.length; i < l; i++) {
    var rule = css.rules[i];

    if (rule.type === 'rule') {
      num += rule.selectors.length;
    }
  }

  return num;
};
