const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        watchFiles: [
            'js/**/*.js',
            'js/**/*.jsx',
            'index.html',
            'css/**/.css',
            'img/**/*.png'
        ],
        compress: true,
        port: 9000,
        host: "0.0.0.0", // needed on GitPod
        allowedHosts: "all", // needed on GitPod
        client: {
            webSocketURL: {
                // needed on GitPod because it proxy like
                // https://{port}-{gitpoduserhost}.gitpod.io
                port: process.env.GITPOD_WORKSPACE_ID ? '443': 9000,
            },
        }
    },
    entry: "./js/index.js",
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path]/[name].[ext]",
                        },
                    },
                ]
            },
            {
                test: /\.(md)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path]/[name].[ext]",
                        },
                    },
                ]
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].min.js" // name of the generated bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: "body",
            scriptLoading: "blocking"
        })
    ],
};
