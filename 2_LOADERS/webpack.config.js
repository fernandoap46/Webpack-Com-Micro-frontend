const path = require('path');
module.exports={
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist.js",
    },
    mode:'development',
    //module vem do webpack
    module:{
        //rules=regras
        rules:[
            {
                test:/\.css$/,
                //indicando qual loaders deve ser utilizado para rodar o css
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg)$/,
                use:['file-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
}