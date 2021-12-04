const path = require("path");
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./vanilla.js",
  output: {
    path: path.resolve(__dirname, "dist-vanilla"),
    filename: "share-model-vanilla.js",
    library: "ShareModal",
    libraryTarget: "window",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  plugins: [new Uglify()],
  devServer: {
    contentBase: path.join(__dirname, "dist-vanilla"),
    port: 3000,
    https: true,
    // proxy: {
    //     '/gdc': {
    //         cookieDomainRewrite: "localhost",
    //         target: proxyTarget,
    //         secure: false,
    //         changeOrigin: true,
    //         onProxyReq: proxyReq => {
    //             // Browers may send Origin headers even with same-origin
    //             // requests. To prevent CORS issues, we have to change
    //             // the Origin to match the target URL.
    //             if (proxyReq.getHeader('origin')) {
    //                 proxyReq.setHeader('origin', proxyTarget);
    //             }
    //         }
    //     },
    //     "/packages": {
    //         "changeOrigin": true,
    //         "cookieDomainRewrite": "localhost",
    //         "target": proxyTarget
    //     },
    //     "/lib": {
    //         "changeOrigin": true,
    //         "cookieDomainRewrite": "localhost",
    //         "target": proxyTarget
    //     },
    //     "/images": {
    //         "changeOrigin": true,
    //         "cookieDomainRewrite": "localhost",
    //         "target": proxyTarget
    //     },
    //     "/*.html": {
    //         "cookieDomainRewrite": "localhost",
    //         "changeOrigin": true,
    //         "secure": false,
    //         "target": proxyTarget
    //     }
    // }
  },
};
