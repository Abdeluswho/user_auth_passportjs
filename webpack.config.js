const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader", include: path.join(__dirname, '/client/src'), query: {
            presets: ["react", "es2015"]
          } 
        }
      ]
    // rules: [{
    //   test: /\.jsx?$/,
    //   include: path.join(__dirname, '/client/src'),
    //   loader: 'ts-loader',
    //   query: {
    //     presets: ["react", "es2015"]
    //   }
    // }],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};