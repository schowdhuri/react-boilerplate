import webpack from "webpack";
import path from "path";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("development"),
  __DEV__: true
};

export default {
    debug: true,
    context: __dirname,
    devtool: "eval-cheap-module-source-map",
    entry: {
        whm: "webpack-hot-middleware/client?reload=true",
        app: "./src/index"
    },
    target: "web", // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, "src"),
            loaders: ["babel"]
        }, {
            test: /(\.css|\.scss)$/,
            include: path.join(__dirname, "src/styles"),
            loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        }]
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS), //Tells React to build in prod mode. https://facebook.github.io/react/downloads.htmlnew webpack.HotModuleReplacementPlugin());
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
