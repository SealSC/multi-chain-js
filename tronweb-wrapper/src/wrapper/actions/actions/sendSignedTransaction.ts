import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import TronWeb from 'tronweb'
class SendSignedTransaction{
  public async sendSignedTransaction(to,amount,from,options,privateKey:string){
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
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(to,
        amount,
        from,
        options
        );
        
      const signedtxn = await tronwebww.trx.sign(tradeobj, privateKey);
      
      let signTransaction:any= await tronwebww.trx.sendRawTransaction(signedtxn);
      
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(PredefinedStatus.NOT_SUPPORT(null));
    }
  }
}
export { SendSignedTransaction }