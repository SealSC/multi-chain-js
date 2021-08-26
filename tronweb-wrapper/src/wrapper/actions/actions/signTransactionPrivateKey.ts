
import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import TronWeb from 'tronweb'
import { tronWebInstall } from '../../tronweb'
class SignTransactionPrivateKey{
  public async signTransactionPrivateKey(dataToSign:any,privateKey:string){
    try{
      let  HttpProvider = TronWeb.providers.HttpProvider;
      let tronwebww=null as any
     if(HttpProvider){
       const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
       const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
       const eventServer = "https://api.shasta.trongrid.io";
       const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
       tronwebww = tronWeb;
     }
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.to,dataToSign.amount,dataToSign.from,dataToSign.options);
      let signTransaction = await tronwebww.trx.sign(tradeobj, privateKey); 
      return new Result(PredefinedStatus.SUCCESS(null))
      
    }catch(err){
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.to,dataToSign.amount,dataToSign.from,dataToSign.options);
      let signTransaction = await (window as any).tronWeb.trx.sign(tradeobj, privateKey);
        return new Result(PredefinedStatus.NOT_SUPPORT(null))
    }
  
  }
}
export { SignTransactionPrivateKey }