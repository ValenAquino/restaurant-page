const path = require('path');

module.exports = {
    mode: "production",
  
    entry: './src/index.js',
    
    output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist')
    },
    
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, "dist")
        },
        open: true,
    },
    
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
    },
};