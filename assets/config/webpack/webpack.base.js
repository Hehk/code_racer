const { join } = require('path');

const PATHS = {
  home: join(__dirname, "../.."),
  app: join(__dirname, "../../app"),
  build: join(__dirname, "../../../priv/static") 
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["latest", "react", "stage-0", "react-hmre"],
        },
      }, {
        test: /\.css$/,
        include: join(PATHS.home, "node_modules"),
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg)$/,
        include: join(PATHS.home, "static"),
        loader: 'file-loader',
      }
    ]
  }
}
