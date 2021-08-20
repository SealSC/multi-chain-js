// import tronweb from 'tronweb'
// import detectEthereumProvider from '@metamask/detect-provider'

// let provider = null

// async function web3Install(){
//   provider = await detectEthereumProvider()
//   if(provider){
//     return new Web3js(provider)
//   }else{
//     return null
//   }
// }
// export { web3Install };
import TronWeb from 'tronweb'
let HttpProvider = null
async function tronWebInstall(){
  HttpProvider = TronWeb.providers.HttpProvider;
  if(HttpProvider){
    const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
    const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
    const eventServer = "https://api.shasta.trongrid.io";
    //创建tronWeb实例
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
    // window.tronWeb = tronWeb;
    return tronWeb
  }else{
    return null
  }
}


export { tronWebInstall };