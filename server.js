#!/usr/bin/env node
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
const serve = require('webpack-serve');

serve({
    config: {
        plugins: [
            new MiniHtmlWebpackPlugin({
                context: {
                    title: 'webpack-serve demo'
                }
            })
        ]
    },
    // Refresh browser without applying hot updates
    hot: {
        hot: false,
        reload: true
    }
});
