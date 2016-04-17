'use strict';
const yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting() {
    const done = this.async();
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        // Defaults to the project's folder name if not specified
        default: this.appname,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
        default: '',
      },
      {
        type: 'confirm',
        name: 'installDeps',
        message: 'Would you like to install all dependencies now?',
        default: false,
      },
    ], (answers) => {
      this.props = answers;
      done();
    });
  },

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        devDeps,
      }
    );

    // .gitignore
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    // set up eslint if using es2015
    if (this.props.language === 'es2015') {
      this.fs.copy(
        this.templatePath('_eslintrc.js'),
        this.destinationPath('.eslintrc.js')
      );
    }

    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      {
        name: this.props.name,
        description: this.props.description,
      }
    );
  },

  install() {
    if (this.props.installDeps) {
      this.npmInstall();
    } else {
      this.log(`Skipping the install step. Run \`npm install\` inside the project root when
        you're ready.`);
    }
  },
});
