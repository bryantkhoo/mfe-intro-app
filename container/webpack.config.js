const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
// const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./index.js",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 6358,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        child: `child@${getRemoteEntryUrl(6359)}`,
      },
      shared: [
        {
          // ...deps,
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = "" } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split("-");
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}
