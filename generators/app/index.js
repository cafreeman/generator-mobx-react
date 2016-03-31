'use strict';
const yeoman = require('yeoman-generator');
// const chalk = require('chalk');
// const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting() {
    let done = this.async();
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        // Defaults to the project's folder name if not specified
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Would you like to enter a description for your project?',
        default: ''
      },
      {
        type: 'confirm',
        name: 'es6',
        message: 'Generate es6 modules?',
        default: true
      }
    ], function (answers) {
      this.props = answers;
      done();
    }.bind(this));
  },

  writing: {
    config() {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name,
          description: this.props.description,
          es6: this.props.es6 ? '"jsnext:main": "es6/index.js",' : ''
        }
      );

      let filesToCopy = [
        '.eslintrc.js',
        '.gitignore',
        '.babelrc',
        '.gitignore',
        'webpack.config.js'
      ];

      filesToCopy.forEach(file => {
        this.fs.copy(
          this.templatePath(file),
          this.destinationPath(file)
        );
      });
    },

    app() {
      ['src', 'dist'].forEach(dir => {
        this.fs.copyTpl(
          this.templatePath(dir),
          this.destinationPath(dir),
          {name: this.props.name}
        );
      });
    }
  },

  install() {
    this.npmInstall();
  }
});
