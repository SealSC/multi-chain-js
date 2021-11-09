import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class SendTransaction {
  public async sendTransaction(data) {
    try {
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      const transaction = new (window as any).solanaWeb3.Transaction();
      let publickeyAddress = new (window as any).solanaWeb3.PublicKey(data.from);
      transaction.feePayer ||= publickeyAddress || undefined;
      transaction.recentBlockhash ||= (
        await connection.getRecentBlockhash("finalized")
      ).blockhash;
      let addressTo = new (window as any).solanaWeb3.PublicKey(data.to);
      transaction.add(
        (window as any).solanaWeb3.SystemProgram.transfer({
          fromPubkey: publickeyAddress,
          toPubkey: addressTo,
          lamports: data.amount,
        })
      );
      const signedTransaction = await (window as any).solana.signTransaction(
        transaction
      );
      const signTransaction = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
    }
  }
}
export { SendTransaction }