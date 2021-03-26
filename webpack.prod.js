const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
  Add middleware and plugins as needed/wanted
  Add packages with NPM and import above
*/

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/pages/index/index.js",
    contact: "./src/pages/contact/contact.js",
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
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

/*
    Example adding optimizing packages
    FROM: https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/

    const path = require('path');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
    const TerserPlugin = require('terser-webpack-plugin')
    const buildPath = path.resolve(__dirname, 'dist');

    module.exports = {

        // This option controls if and how source maps are generated.
        // https://webpack.js.org/configuration/devtool/
        devtool: 'source-map',

        // https://webpack.js.org/concepts/entry-points/#multi-page-application
        entry: {
            index: './src/index.js',
            about: './src/about.js',
            contacts: './src/contacts.js'
        },

        // how to write the compiled files to disk
        // https://webpack.js.org/concepts/output/
        output: {
            filename: '[name].[hash:20].js',
            path: buildPath
        },

        // https://webpack.js.org/concepts/loaders/
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                }
            ]
        },

        // https://webpack.js.org/concepts/plugins/
        plugins: [
            new CleanWebpackPlugin(buildPath),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'body',
                chunks: ['index'],
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/about.html',
                inject: 'body',
                chunks: ['about'],
                filename: 'about.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/contacts.html',
                inject: 'body',
                chunks: ['contacts'],
                filename: 'contacts.html'
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css"
            })
        ],

        // https://webpack.js.org/configuration/optimization/
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCssAssetsPlugin({})
            ]
        }
    };
*/
