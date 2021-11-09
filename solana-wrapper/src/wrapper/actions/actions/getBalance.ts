import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class GetBalance {
  public async getBalance(address: string) {
    
    try {
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      let publickeyAddress = new (window as any).solanaWeb3.PublicKey(address);
      let Balance = await connection.getBalance(publickeyAddress).then((balance) => {
        return balance
      });
      return new Result(PredefinedStatus.SUCCESS(Balance.toString()))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'))
    }
  }
}
export { GetBalance }