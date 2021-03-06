import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
import { Actions } from '../index'

class GetBlockNumber {
  public async getBlockNumber() {
    const lastHdr = await (window as any).api.rpc.chain.getHeader();
    return new Result(PredefinedStatus.SUCCESS(Number(`${lastHdr.number}`)))
  }
}
export { GetBlockNumber }