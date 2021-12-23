const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')

module.exports = {
   mode:isDevelopment ? 'development' : 'production',
   devtool:isDevelopment ? 'eval-source-map' :'source-map',
   entry: path.resolve(__dirname,'src', 'index.tsx'),
   output:{
       path:path.resolve(__dirname, 'dist'),
       filename:'bundle.js',
   },
   resolve:{
       extensions:['.js', '.jsx', '.ts', '.tsx'],
   }, 
   devServer:{
      static:path.resolve(__dirname, 'public'),
      hot:true
   },
   plugins:[
       isDevelopment && new ReactRefreshWebpack(),
       new HtmlWebpackPlugin({
           template:path.resolve(__dirname, 'public', 'index.html')
       })
   ].filter(Boolean),
   module:{
       rules:[
           {
               test:/\.(j|t)sx/,
               exclude:/node-modules/,
               use:{
                   loader:'babel-loader',
                   options :{
                       plugins:[
                           isDevelopment && require.resolve('react-refresh/babel')
                       ].filter(Boolean)
                   }
               }
           },
           {
            test:/\.scss$/,
            exclude:/node-modules/,
            use:['style-loader','css-loader', 'sass-loader']
        }
       ],
   },
  
}