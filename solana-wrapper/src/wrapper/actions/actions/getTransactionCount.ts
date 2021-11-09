import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class GetTransactionCount {
  public async getTransactionCount() {
    try {
      let url = "https://api.testnet.solana.com";
      const connection = new (window as any).solanaWeb3.Connection(url);
      let Transaction = await connection.getTransactionCount().then((res) => {
        return res
      });
      return new Result(PredefinedStatus.SUCCESS(Transaction.toString()))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
    }
  }
}
export { GetTransactionCount }