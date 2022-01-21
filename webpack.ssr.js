const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {

    return {
        mode: 'production',
        entry: {
            index: path.join(__dirname, './src/index.js')
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name]-server.js',
            libraryTarget: 'umd',
            globalObject: 'this',  // 定义在运行环境时候当前全局对象 默认是'self' 所以需要用'this'替代
        },
        // externals: {
        //     react: {
        //       commonjs: 'react',
        //       commonjs2: 'react',
        //       amd: 'react',
        //       root: 'React',
        //     },
        //     'react-dom': {
        //       commonjs: 'react-dom',
        //       commonjs2: 'react-dom',
        //       amd: 'react-dom',
        //       root: 'ReactDOM',
        //     },
        //   },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.html'),
                minify: {
                    removeComments: false
                }
            }),
            new MiniCssExtractPlugin()
        ]
    }
}