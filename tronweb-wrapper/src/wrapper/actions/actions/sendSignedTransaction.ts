import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendSignedTransaction{
  public async sendSignedTransaction(privateKey:string){
    try{
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx("TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH", 100,"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",1);
      const signedtxn = await (window as any).tronWeb.trx.sign(tradeobj, privateKey);
      let signTransaction = await (window as any).tronWeb.trx.sendRawTransaction(signedtxn);
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(null))
    }
  }
}
export { SendSignedTransaction }