import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'

class GetBalance{
  public async getBalance(address:string){
    let ActionsIn = new Actions()
    let api = await ActionsIn.init('wss://rpc.polkadot.io');
    const { nonce, data: balance } = await api.data.query.system.account(address);
    return new Result(PredefinedStatus.SUCCESS(`${balance.free}`))
  }
}
export { GetBalance }