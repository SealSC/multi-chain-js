import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class GetBlockNumber {
  public async getBlockNumber(address: number) {
    try {
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      let blockNumber = await connection.getBlock(address).blockHeight
      return new Result(PredefinedStatus.SUCCESS(blockNumber))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlockNumber }