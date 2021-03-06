"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyPlugin = require('copy-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function (env, argv) {
  var isProd = argv.mode === 'production';
  var isDev = !isProd;

  var filename = function filename(ext) {
    return "[name].[contenthash].bundle.".concat(ext);
  };

  var plugins = function plugins() {
    var base = [new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }), new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/assets/img/ico', 'favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }]
    }), new MiniCssExtractPlugin({
      filename: filename('css')
    })];

    if (isDev) {
      base.push(new ESLintPlugin());
    }

    return base;
  };

  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['core-js/stable', 'regenerator-runtime/runtime', './index.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: filename('js'),
      clean: true
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src', 'core')
      }
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      watchFiles: './'
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    module: {
      rules: [{
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, // Translates CSS into CommonJS
        'css-loader', // Compiles Sass to CSS
        'sass-loader']
      }, {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    }
  };
};
//# sourceMappingURL=webpack.config.js.map