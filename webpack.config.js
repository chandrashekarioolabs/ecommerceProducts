const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, '..');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    mode: 'development',
    entry: ['react-hot-loader/patch', './src/index.js'],
    target: 'web',
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        Component: path.resolve(__dirname, 'src/components/'),
        Redux: path.resolve(__dirname, 'src/redux/'),
        Assests: path.resolve(__dirname, 'src/assests/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
      },
      extensions: ['.json', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'PUBLISH BLOG',
        template: __dirname + '/public/index.html',
        favicon: './public/favicon.ico',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true,
          html5: true,
          minifyCSS: true,
          minifyJS: true,
        },
      }),
      new webpack.DefinePlugin(envKeys),
      new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
      port: process.env.PORT || 8800,
      host: 'localhost',
      publicPath: process.env.publicPath || '/',
      contentBase: path.join(APP_DIR, 'dist'),
      proxy: {},
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/i,
          exclude: /(node_modules|bower_components)/,
          loader: ['react-hot-loader/webpack', 'babel-loader'],
        },
        {
          test: /\.(css|scss)?$/i,
          exclude: [/node_modules/],
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'url-loader',
              options: {
                quality: 85,
                limit: 8192,
                mimetype: 'image/png',
              },
            },
          ],
        },
      ],
    },
  };
};
