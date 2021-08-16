module.exports = {
  
  publicPath: './',
  
  outputDir: 'dist',
 
  devServer: {
    port: 8888,
  }, 
  lintOnSave:false,    
  configureWebpack: {   
      
      performance: {
        hints:'warning',
        
        maxEntrypointSize: 5000000000,
         
        maxAssetSize: 3000000000,
         
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.ts');
        }
      }
    }
}