const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const presets_babel = [
    '@babel/preset-env',
    '@babel/preset-react'
]

const plugins_babel = [
    ['@babel/plugin-proposal-class-properties']
]

const babel_loader = {
    loader: 'babel-loader',
    options: {
        presets: presets_babel,
        plugins: plugins_babel
    }
}

const rules_for_js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [babel_loader]
}

const rules_for_css = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader','css-loader']
}

module.exports = {
    entry: {index : './src/index.js'},
    module: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            rules_for_js,
            rules_for_css           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public' ,'index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true, 
        historyApiFallback: true
    },
    optimization: {
        runtimeChunk: 'single'
    }
}