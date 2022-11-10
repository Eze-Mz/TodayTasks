const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader", "postcss-loader"],
};

const ruleForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /nodeModules/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};
module.exports = (env, { mode }) => {
  console.log(mode);
  const isProduction = mode === "production";
  return {
    //entry: "index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
      path: path.resolve(__dirname, "public"),
    },
    module: {
      rules: [ruleForJavaScript, ruleForStyles],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    devServer: {
      open: true,
      port: 3000,
      client: {
        overlay: true,
      },
      compress: true,
    },
    //devtool: "source-map",
  };
};
