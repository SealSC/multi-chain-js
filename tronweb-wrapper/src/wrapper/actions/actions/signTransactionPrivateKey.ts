
import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import tronWeb from 'tronweb'
import { tronWebInstall } from '../../tronweb'
class SignTransactionPrivateKey{
  public async signTransactionPrivateKey(dataToSign:any,privateKey:string){
    try{
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.to,dataToSign.amount,dataToSign.from,dataToSign.options);
      let signTransaction = await (window as any).tronWeb.trx.sign(tradeobj, privateKey);
        return new Result(PredefinedStatus.NOT_SUPPORT(null))
      
    }catch(err){
      (window as any).tronWeb = await tronWebInstall()
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.to,dataToSign.amount,dataToSign.from,dataToSign.options);
      let signTransaction = await (window as any).tronWeb.trx.sign(tradeobj, privateKey); 
      return new Result(PredefinedStatus.SUCCESS(null))
      // return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  
  }
}
export { SignTransactionPrivateKey }