import TronWeb from 'tronweb'
// let TronWeb = require("tronweb")
import * as sleep from 'await-sleep';
let HttpProvider=null
async function tronWebInstall(){
  // HttpProvider = TronWeb.providers.HttpProvider
  // if(tronWeb.isTronLink){
    // if (!window.tronWeb) { 
    //   HttpProvider = TronWeb.providers.HttpProvider;
    //   const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
    //   const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
    //   const eventServer = 'https://api.shasta.trongrid.io';
    //   const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);
    //   return tronWeb;
    // }else{
    //  return window.tronWeb
    // }
    return window.tronWeb
  // }else{
  //   HttpProvider = TronWeb.providers.HttpProvider;
  //   if(HttpProvider){
  //     const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
  //     const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
  //     const eventServer = "https://api.shasta.trongrid.io";
  //     const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
  //     return tronWeb
  //   }else{
  //     return null
  //   }
  // }
    

}
async function web3InstallisPhantom(){
  await sleep(1500);
    const provider = window.tronWeb;
    
    if (provider) {
      window.isPhantom = window.tronWeb
      return window.isPhantom;
    }
 

  // console.log(provider,"provider.isPhantom")
  
}

export { tronWebInstall , web3InstallisPhantom};