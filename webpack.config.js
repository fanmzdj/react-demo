var webpack     = require('webpack');
var config = {
    src: __dirname+'/js',
    dist: __dirname+'/dist/js'
};
var host = "10.0.0.30";

module.exports = {
    context: config.src,
    entry: {
        entry: ['./entry.js'],
        header: ['./header.js'],
        slider: ['./slider.js'],
        section: ['./section.js'],
        menu: ['./menu.js'],
        flow: ['./flow.js']
    },
    output: {
        path: config.dist,
        publicPath: 'http://'+host+':9004/react/dist/assets/',
        filename: '[name].module.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loader: 'jsx-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.scss$/, loader: 'style-loader!css-loader!scss-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=../assets/[name].[ext]'},
        ]
    }
};
