const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    publicPath: "auto",
  },

  mode: "development",
  cache: false,
  target: "es2020",
  devtool: false,

  resolve: {
    extensions: [".vue", ".js", ".json"],
  },

  experiments: {
    outputModule: true,
  },

  devServer: {
    historyApiFallback: true,
    static: { directory: path.join(__dirname, "public") },
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
  },

  module: {
    rules: [
      // Load .vue files
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // Load .js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // Load style files
      {
        test: /\.(scss|css)$/i,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              import: true,
              esModule: false,
            },
          },
          "sass-loader",
        ],
      },
      // Load image assets
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
      // Load font assets
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    // new ModuleFederationPlugin({
    //   name: "vue2App",
    //   library: { type: "module" },
    //   remotes: {
    //     vue3App: "http://localhost:4000/assets/remoteEntry.js", // Adjust the URL and port
    //   },
    //   // shared: require("./package.json").dependencies,
    // }),

    new HtmlWebPackPlugin({
      template: "./src/index.html",
      // inject: false,
    }),
  ],
};
