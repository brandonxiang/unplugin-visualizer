const path = require('path')
const unplugin = require('../dist/webpack').default

module.exports = {
  entry: './main.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    unplugin(),
  ],
}
