const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Add this

const ENVIRONMENT = process.env.NODE_ENV || "development";

const isProd = ENVIRONMENT === "production";
const isDev = ENVIRONMENT === "development";

console.assert(isProd || isDev, "webpack: isProd or isDev has to be true");

module.exports = {
  entry: "./src/index.ts",
  mode: ENVIRONMENT,
  module: {
    rules: [
      {
        test: /\.(?:ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
};
