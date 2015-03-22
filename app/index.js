'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: {

    askForName: function () {
      var done = this.async();

      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the ' + chalk.red('Hack for Equality') + ' generator!'
      ));

      this.log('Sets up a simple Node/Express server environment with everything you need to quickly build your webapp\n');

      var prompts = [{
        name: 'appname',
        message: 'To start, would you mind telling me the name of your app?'
      }];

      this.prompt(prompts, function (props) {
        this.appname = props.appname;

        done();
      }.bind(this));
    },

    askForJavaScriptFramework: function() {
      var done = this.async();

      var prompts = [{
        type: 'checkbox',
        name: 'jsFrameworks',
        message: 'Please select all or any of the following JavaScript libraries',
        choices: [
          {
            name: 'jQuery',
            value: 'jquery',
            checked: true
          },
          {
            name: 'React.js',
            value: 'react',
            checked: true
          }
        ]
      }];

      this.prompt(prompts, function (props) {
        this.jsFrameworks = props.jsFrameworks;
        this.hasJquery = props.jsFrameworks.indexOf('jquery') !== -1;
        this.hasReact = props.jsFrameworks.indexOf('react') !== -1;

        done();
      }.bind(this));
    },

    askForCSSLanguage: function() {
      var done = this.async();

      var prompts = [{
        type: 'list',
        name: 'cssLanguage',
        message: 'In what format will your write your CSS?',
        choices: [
          {
            name: 'Less',
            value: 'less'
          },
          {
            name: 'Plain CSS',
            value: 'css'
          }
        ]
      }];

      this.prompt(prompts, function (props) {
        this.cssLanguage = props.cssLanguage;

        done();
      }.bind(this));
    },

    askForBootstrap: function() {
      var done = this.async();

      var prompts = [{
        type: 'confirm',
        name: 'hasBootstrap',
        message: 'Should I include Twitter Bootstrap?',
        default: true
      }];

      this.prompt(prompts, function (props) {
        this.hasBootstrap = props.hasBootstrap;

        done();
      }.bind(this));
    },

    askForDeezer: function() {
      var done = this.async();

      var prompts = [{
        type: 'confirm',
        name: 'hasDeezer',
        message: 'Should I include the Deezer API files?',
        default: false
      }];

      this.prompt(prompts, function (props) {
        this.hasDeezer = props.hasDeezer;

        done();
      }.bind(this));
    }
  },

  writing: {
    gulp: function () {
      this.template('Gulpfile.js');
      this.template('tasks/browserify.js');
      this.copy('tasks/clean.js');
      this.template('tasks/css.js');
      this.copy('tasks/default.js');
      this.copy('tasks/nodemon.js');
      this.copy('tasks/resources.js');
      this.copy('tasks/watch.js');
      this.directory('tasks/utils');
    },

    packageJSON: function () {
      this.template('_package.json', 'package.json');
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    app: function() {
      // Express
      this.directory('bin');
      this.directory('lib');
      this.template('routes/index.js');
      this.template('views/index.hbs');
      this.template('views/layouts/default.hbs');
      this.copy('app.js');
      this.copy('_README.md', 'README.md');

      // JavaScript
      this.template('src/js/app.js');
      this.directory('src/js/lib');

      if (this.hasReact) {
        this.directory('src/js/components');
      }

      // Css
      if (this.cssLanguage === 'less') {
        this.copy('src/css/variables.less');
        this.copy('src/css/app.less');
      }
      if (this.cssLanguage === 'css') {
        this.copy('src/css/app.css');
      }

      // Resources
      this.directory('src/img');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
