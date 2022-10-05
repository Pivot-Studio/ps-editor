const path = require('path'); //node环境当前路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //模板文件插件，能够自动将打包的css和js加入到模板文件中
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
module.exports = {
  entry: {
    app: './src/index.tsx', //找到咱们刚才在src下面的入口文件
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
  },
  output: {
    globalObject: 'self',
    filename: (chunkData) => {
      switch (chunkData.chunk.name) {
        case 'editor.worker':
          return 'editor.worker.[hash].js';
        default:
          return 'bundle.[hash].js';
      }
    },
    path: path.resolve(__dirname, 'dist'),
    clean: true, //webpack5新增的，每次打包前删除旧的dist包文件
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif|svg)$/, //处理图片文件打包
        type: 'asset', //webpack5新增的处理静态资源的loader，替换之前的url-loder、file-loader,具体的可以官方文档
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024, //最大100kb的文件会被转成base64，大于100kb的文件会转成图片文件
          },
        },
        generator: {
          filename: 'static/images/[name]_[contenthash:8][ext]', //最终图片文件输出的路径
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        include: APP_DIR,
        use: [
          //loader 顺序是自下而上执行，所以顺序一定不要错
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              namedExport: true,
            },
          }, //如果需要使用css module模式的话，在这个loader里面添加配置即可，自己百度下
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      minify: {
        //压缩html
        collapseWhitespace: true, //移除空格
        removeComments: true, // 移除注释
      },
    }),
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
      languages: ['javascript'],
    }),
  ],
};
