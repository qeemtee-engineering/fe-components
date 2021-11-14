const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/index.tsx',
  mode: 'production',
  plugins: [new CaseSensitivePathsPlugin(), new CleanWebpackPlugin()],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'ts-loader' },
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
          loaders.push({ loader: 'raw-loader' });

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
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'index.js',
    library: 'fe-components',
    libraryTarget: 'umd',
  },
  externals: [...Object.keys(pkg.dependencies || {}), nodeExternals()],
};
