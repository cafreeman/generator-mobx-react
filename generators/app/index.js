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
        type: 'list',
        name: 'language',
        message: 'Which language would you like to use?',
        default: 'es2015',
        choices: [
          {
            name: 'ES2015',
            value: 'es2015',
            short: 'es2015',
          },
          {
            name: 'TypeScript',
            value: 'ts',
            short: 'ts',
          },
        ],
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
    const baseDevDeps = [
      /* eslint-disable quotes */
      `"clean-webpack-plugin": "^0.1.8",`,
      `"css-loader": "^0.23.1",`,
      `"eslint": "^2.5.3",`,
      `"eslint-plugin-react": "^4.2.3",`,
      `"extract-text-webpack-plugin": "^1.0.1",`,
      `"html-webpack-plugin": "^2.15.0",`,
      `"npm-install-webpack-plugin": "^3.0.0",`,
      `"rimraf": "^2.5.2",`,
      `"style-loader": "^0.13.1",`,
      `"webpack": "^1.12.14",`,
      `"webpack-dev-server": "^1.14.1",`,
      `"webpack-merge": "^0.8.4"`,
      /* eslint-enable quotes */
    ];

    const devDeps = (function buildPackageDeps(commonDeps, language) {
      let fullDeps;
      if (language === 'es2015') {
        fullDeps = commonDeps.concat(
          [
            /* eslint-disable quotes */
            `"babel-cli": "^6.6.5",`,
            `"babel-eslint": "^6.0.0",`,
            `"babel-loader": "^6.2.4",`,
            `"babel-plugin-array-includes": "^2.0.3",`,
            `"babel-plugin-transform-decorators-legacy": "^1.3.4",`,
            `"babel-plugin-transform-object-assign": "^6.5.0",`,
            `"babel-preset-es2015": "^6.6.0",`,
            `"babel-preset-react": "^6.5.0",`,
            `"babel-preset-react-hmre": "^1.1.1",`,
            `"babel-preset-stage-1": "^6.5.0",`,
            `"eslint-config-airbnb": "^6.2.0"`,
            /* eslint-enable quotes */
          ]
        );
      } else if (language === 'ts') {
        fullDeps = commonDeps.concat(
          [
            /* eslint-disable quotes */
            `"ts-loader": "^0.8.0",`,
            `"typescript": "^1.8.0",`,
            `"typings": "^0.7.0"`,
            /* eslint-enable quotes */
          ]
        );
      } else {
        throw new Error('No language was specified!');
      }

      return fullDeps.sort().join(`\n    `);
    }(baseDevDeps, this.props.language));

    // Package.json
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

    // webpack config
    this.fs.copyTpl(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {
        name: this.props.name,
        language: this.props.language,
      }
    );

    // copy app src, dependenct on language choice
    this.fs.copyTpl(
      this.templatePath(`src_${this.props.language === 'es2015' ? 'es2015' : 'ts'}`),
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
