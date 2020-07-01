const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/static/index.tsx',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        historyApiFallback: true, contentBase: './'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader',
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/static/index.html'
        }),
    ]
}