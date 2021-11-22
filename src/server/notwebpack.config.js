import path from 'path';
// import { Configuration, HotModuleReplacementPlugin } from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: path.join(__dirname, 'src', 'server', 'index.ts'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // plugins: [
  //   // new HtmlWebpackPlugin({
  //   //   template: 'src/index.html',
  //   // }),
  //   // new HotModuleReplacementPlugin(),
  // ],
  devtool: 'inline-source-map',
  // devServer: {
  //   static: path.join(__dirname, 'build'),
  //   historyApiFallback: true,
  //   port: 4000,
  //   open: true,
  //   hot: true,
  // },
};

export default config;
