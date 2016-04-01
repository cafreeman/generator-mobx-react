'use strict';
const yeoman = require('yeoman-generator');

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
      },
      {
        type: 'confirm',
        name: 'install-deps',
        message: 'Would you like to install all dependencies now?',
        default: false
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
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(file),
          {
            name: this.props.name
          }
        );
      });
    },

    app() {
      this.fs.copyTpl(
        this.templatePath('src'),
        this.destinationPath('src'),
        {
          name: this.props.name,
          description: this.props.description
        }
      );
    }
  },

  install() {
    if (this.props['install-deps']) {
      this.npmInstall();
    } else {
      this.log(`Skipping the install step. Run \`npm install\` inside the project root when
        you're ready.`);
    }
  }
});
