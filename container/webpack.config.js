const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

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
      name: "container",
      filename: "remoteEntry.js",
      exposes: {
        "./GlobalContext": `./GlobalContext.jsx`,
      },
      remotes: {
        container: `container@${getRemoteEntryUrl(6358)}`,
        child: `child@${getRemoteEntryUrl(6359)}`,
      },
      shared: [
        {
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
