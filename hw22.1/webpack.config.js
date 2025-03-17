const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // шлях до вашого HTML файлу
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // новий параметр для визначення директорії
        },
        open: true, // автоматично відкривати браузер
        port: 9000,
        hot: true, // підтримка гарячої заміни (Hot Module Replacement)
    },
};
