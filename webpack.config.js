const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactDocgenTypescriptPlugin = require('react-docgen-typescript-plugin').default;
const path = require('path');

module.exports = (env = {}) => {
  return {
    entry: path.resolve(__dirname, 'src/main.tsx'),

    plugins: [
        new HtmlWebpackPlugin({
          filename: `index.html`,
          template: path.resolve(__dirname, 'src/template.html'),
        }),
      new ReactDocgenTypescriptPlugin(),
    ],

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          loader: 'ts-loader',
          options: { transpileOnly: true },
          exclude: /node_modules/,
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    devServer: {
      hot: true,
      port: 8080,
      open: true,
    },
  };
};
