const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "main.js"
  },
  mode: process.env.NODE_ENV || 'development',
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  },
  // If CORS process blocks HTTP requests from front-end, look at changing proxy property here OR add permmissions in router's res.header properties
  devServer: {
    static: {
      publicPath: path.resolve(__dirname, "dist")
    },
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};