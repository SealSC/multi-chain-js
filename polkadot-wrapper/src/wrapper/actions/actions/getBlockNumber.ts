import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'

class GetBlockNumber{
  public async getBlockNumber(){
    let ActionsIn = new Actions()
    let api = await ActionsIn.init('wss://rpc.polkadot.io');
    const lastHdr = await api.data.rpc.chain.getHeader();
    return new Result(PredefinedStatus.SUCCESS(`${lastHdr.number}`))
  }
}
export { GetBlockNumber }