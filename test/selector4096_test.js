'use strict';

var count = require('../tasks/lib/css').countSelector;
var grunt = require('grunt');
var path = require('path');

var fixtures = path.join(__dirname, 'fixtures');

exports.selector4096 = {
  count: function (test) {
    test.expect(5);

    var num100 = count(grunt, path.join(fixtures, '100.css'));
    var num2047 = count(grunt, path.join(fixtures, '2047.css'));
    var num2048 = count(grunt, path.join(fixtures, '2048.css'));
    var num4095 = count(grunt, path.join(fixtures, '4095.css'));
    var num4096 = count(grunt, path.join(fixtures, '4096.css'));

    test.strictEqual(num100, 100, 'should have 100 selectors');
    test.strictEqual(num2047, 2047, 'should have 2047 selectors');
    test.strictEqual(num2048, 2048, 'should have 2048 selectors');
    test.strictEqual(num4095, 4095, 'should have 4095 selectors');
    test.strictEqual(num4096, 4096, 'should have 4096 selectors');

    test.done();
  }
};
