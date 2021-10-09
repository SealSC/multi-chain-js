import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
import json from '@rollup/plugin-json';

class SignTransaction {
  public async signTransaction(address: string) {
    try {
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      const transaction = new (window as any).solanaWeb3.Transaction();
      let publickeyAddress = new (window as any).solanaWeb3.PublicKey(address);
      transaction.feePayer ||= publickeyAddress || undefined;
      transaction.recentBlockhash ||= (
        await connection.getRecentBlockhash("finalized")
      ).blockhash;
      const Transaction = await (window as any).solana.signTransaction(
        transaction
      );
      return new Result(PredefinedStatus.SUCCESS(JSON.stringify(Transaction)))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignTransaction }