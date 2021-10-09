import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendTransaction{
  public async sendTransaction(addressFrom:string,dataToSign:string){
    try{
      // let signTransaction = await (window as any).web3.eth.sendSignedTransaction(dataToSign)
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      const transaction = new (window as any).solanaWeb3.Transaction();
      let publickeyAddress = new (window as any).solanaWeb3.PublicKey(addressFrom);
      transaction.feePayer ||= publickeyAddress || undefined;
      transaction.recentBlockhash ||= (
        await connection.getRecentBlockhash("finalized")
      ).blockhash;
      let addressTo =  new (window as any).solanaWeb3.PublicKey(dataToSign);
      transaction.add(
        (window as any).solanaWeb3.SystemProgram.transfer({
          fromPubkey: publickeyAddress,
          toPubkey: addressTo,
          lamports: 10,
        })
      );
      const signedTransaction = await (window as any).solana.signTransaction(
        transaction
      );
      const signTransaction = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      new Result(PredefinedStatus.NOT_SUPPORT(null))
    }
  }
}
export { SendTransaction }