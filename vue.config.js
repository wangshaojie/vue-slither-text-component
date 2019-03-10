const path = require('path');
const NODE_ENV = process.env.NODE_ENV
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-slither-text-component/'
    : '/',
  outputDir: 'dist',
  pages:{
    index:{
      entry: NODE_ENV == 'development' ? './src/main.js' : './src/index.js',
      filename: 'slitherText.html',
      library: 'slitherText',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
  },
  css: {
    extract: false,
    loaderOptions: {
      css: {
        getLocalIdent: (context, localIdentName, localName) => {
          return 'slither-text-' + localName
        }
      }
    }
  }
}