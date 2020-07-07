/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/client/index.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist/client'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/client'),
    port: 3000,
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  // change production when build for production environment
  mode: 'development',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.client.json',
            },
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: '[name].[ext]',
            },
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
