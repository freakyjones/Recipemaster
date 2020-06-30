const path =require('path');
let htmlplugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'index_bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                "presets": [
                  [
                    "@babel/preset-env",
                    {
                      "targets": {
                        "browsers": [
                          ">0.25%",
                          "not ie 11",
                          "not op_mini all"
                        ]
                      }
                    }
                  ],
                  "@babel/preset-react"
                ],
                "plugins": [
                  "@babel/plugin-transform-runtime"
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },

        ]
      },
    plugins:[
      new htmlplugin({template:'./src/index.html'})]
}