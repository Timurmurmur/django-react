const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: ["./leadmanager/frontend/src/index.js"],
    output: {
      path: path.resolve("./leadmanager/frontend/static/frontend/"),  
      filename: "main.js"
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {},
              },
            ],
        }
    ],
    }
}