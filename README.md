grunt-selector4096
==================

> Warn if CSS file has more than equal 4096 selectors.


## Getting Started

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-selector4096 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-selector4096');
```


## The "selector4096" task

_Run this task with the `grunt selector4096` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Usage examples

In this example, running `grunt selector4096:all` (or `grunt selector4096` because `selector4096` is a [multi task](http://gruntjs.com/configuring-tasks#task-configuration-and-targets)) will count selectors in all CSS files under the `src/css/` directory and their subdirectories, warn if they have more than eqall 4096 selectors, and abort.

```js
grunt.initConfig({
  selector4096: {
    all: ['src/css/**/*.css']
  }
});
```

This plugin is read-only task, so you don't need to specify `dest` like `[grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)`.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

  - 2013-12-14  v0.1.0 Initial release
