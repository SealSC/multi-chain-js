import TronWeb from 'tronweb'
let HttpProvider = null
async function tronWebInstall(){
  HttpProvider = TronWeb.providers.HttpProvider;
  if(HttpProvider){
    const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
    const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
    const eventServer = "https://api.shasta.trongrid.io";
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
    // window.tronWeb = tronWeb;
    return tronWeb
  }else{
    return null
  }
}


export { tronWebInstall };