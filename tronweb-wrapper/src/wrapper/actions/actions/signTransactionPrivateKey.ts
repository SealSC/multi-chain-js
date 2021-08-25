
import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import tronWeb from 'tronweb'
class SignTransactionPrivateKey{
  public async signTransactionPrivateKey(dataToSign:any,privateKey:string){
    try{
      if(tronWeb.isTronLink){
        return new Result(PredefinedStatus.NOT_SUPPORT(null))
      }else{
        const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.to,dataToSign.amount,dataToSign.from,dataToSign.options);
        let signTransaction = await (window as any).tronWeb.trx.sign(tradeobj, privateKey); 
        return new Result(PredefinedStatus.SUCCESS(signTransaction))
      }
    }catch(err){
      console.log(err,"err")

      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  
  }
}
export { SignTransactionPrivateKey }