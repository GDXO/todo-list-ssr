const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const { default: merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.config.base')

// 判断环境变量
const isDev = process.env.NODE_ENV === 'development'

let config

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  open: true,
  hot: true,
  compress: true,
  overlay: {
    errors: true
  }
}

const defaultPlugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../public/index.html')
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  })
]

if (isDev) {
  config = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer,
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    plugins: defaultPlugins.concat([])
  })
} else {
  config = merge(baseConfig, {
    mode: 'production',
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      })
    ])
  })
}

module.exports = config
