const path = require('path');

const config = {
   entry: './mytest/entry/file.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'mytest-demo.bundle.js'
   },
   module: {
      rules: [
         { test: /\.txt$/, use: 'raw-loder' }
      ]
   }
}

module.exports = config;
