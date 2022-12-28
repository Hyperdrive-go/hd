const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: { 
      path: require.resolve("path-browserify"),
      util: false
    }
  },
  devServer: { static: {
    directory: path.join(__dirname, "src") 
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "css-modules-typescript-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/i,
        use: ["file-loader"]
      },
    ],
  }
};