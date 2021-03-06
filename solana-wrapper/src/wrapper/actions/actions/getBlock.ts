import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class GetBlock {
  public async getBlock(address: number | string) {
    try {
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      let blockDataField = await connection.getBlock(address)
      return new Result(PredefinedStatus.SUCCESS(blockDataField))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
    }
  }
}
export { GetBlock }