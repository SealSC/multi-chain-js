import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class GetTransaction {
  public async getTransaction(txHash: string) {
    try {
      let url = "https://api.testnet.solana.com";
      const connection = new (window as any).solanaWeb3.Connection(url);
      let TransactionDataField = await connection.getTransaction(txHash).then((res) => {
        return res
      });
      return new Result(PredefinedStatus.SUCCESS(TransactionDataField))

    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetTransaction }