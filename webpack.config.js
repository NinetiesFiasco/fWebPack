module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: ["/node_modules/"],
            use: [
              {
                loader: "babel-loader",                
                options: {
                  presets: ["env","react"],
                },
              },
            ]
          },
          {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],        
       },

    entry: __dirname + "/app/js/windowLoad.js",
    output: {
        path: __dirname + "/dist/",
    },
    mode: 'development',
}