const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: './app/index.tsx',
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'ts-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        use: function ({ realResource }) {
          const loaders = [];

          let ext = realResource.split('.');
          ext = ext[ext.length - 1];

          if (['css', 'scss'].indexOf(ext) > -1) {
            loaders.push({
              loader: 'file-loader',
              options: {
                name: '/assets/svg/[name].[ext]',
              },
            });
          } else {
            loaders.push({ loader: 'raw-loader' });
          }

          return loaders;
        },
      },
      {
        test: /\.(png|jpg|jpeg|bmp|gif|woff|woff2|eot|ttf)$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  devServer: {
    compress: true,
    port: 9000,
    static: {
      publicPath: '/',
    },
    client: {
      progress: true,
    },
    historyApiFallback: true,
  },
};
