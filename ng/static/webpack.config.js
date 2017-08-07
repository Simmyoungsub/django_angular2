var webpack=require('webpack');
var path=require('path');

module.exports={
  entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, './src'),
            {}
        )
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['awesome-typescript-loader']}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [ path.resolve(__dirname, 'node_modules') ]
    }
};
