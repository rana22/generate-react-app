// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path:path.resolve(__dirname, "dist"),
    },
    
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
      },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ]
      },
  devServer: {
    port: 3000,
  },
};