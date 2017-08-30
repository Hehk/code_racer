const { join, resolve } = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const BabiliPlugin = require('babili-webpack-plugin');
const glob = require('glob');

const PATHS = {
  home: join(__dirname, "../.."),
  app: join(__dirname, "../../app"),
  build: join(__dirname, "../../../priv/static") 
};

module.exports = {
  entry: join(PATHS.home, "app/app.js"),
  output: {
    path: PATHS.build,
    filename: "js/[name].js",
  },
  resolve: {
    alias: {
      components: join(PATHS.app, 'components'),
      containers: join(PATHS.app, 'containers'),
      images: join(PATHS.home, 'static/images'),
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: join(PATHS.home, "app"),
        exclude: join(PATHS.home, "node_modules"),
        options: {
          presets: ["latest", "react", "stage-0", "react-hmre"],
        },
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }, {
        test: /\.(png|svg|jpg)$/,
        include: join(PATHS.home, "static"),
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new PurifyCSSPlugin({
      paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ), 
    }),
    // enable when i set up prod mode
    // new BabiliPlugin(),
  ],
}
