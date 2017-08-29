const path = require('path');

module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: {
      externals: {
        angular: 'angular'
      }
    }
  },
  webpack: {
    rules: {
      html: {
        use: [
          'ngtemplate-loader',
          'html-loader'
        ],
        exclude: path.resolve(__dirname, 'node_modules/nwb/templates/webpack-template.html')
      }
    }
  }
}
