const { join, resolve } = require('path');
const webpack = require('webpack');

const PATHS = {
  home: join(__dirname, "../.."),
  build: join(__dirname, "../../../priv/static") 
};

module.exports = {
  entry: join(PATHS.home, "app/index.js"),
  output: {
    path: PATHS.build,
    filename: "js/app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: join(PATHS.home, "node_modules"),
        options: {
          presets: ["latest", "react", "stage-0", "react-hmre"],
        },
      }, {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
      }, {
        test: /\.(png|svg|jpg)$/,
        include: join(PATHS.home, "static"),
        loader: 'file-loader',
      }
    ]
  }
}
