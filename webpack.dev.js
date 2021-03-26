const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/pages/index/index.js",
    contact: "./src/pages/contact/contact.js",
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    // For index.html
    new HtmlWebpackPlugin({
      // HTML template
      template: "./src/pages/index/index.html",
      inject: true,
      // input script cited in entry above
      chunks: ["index"],
      // output file
      filename: "index.html",
      favicon: "./src/static/favicon.ico",
    }),
    // For contact.html
    new HtmlWebpackPlugin({
      template: "./src/pages/contact/contact.html",
      inject: true,
      chunks: ["contact"],
      filename: "contact.html",
      favicon: "./src/static/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
};
