import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'
import Decimal from 'decimal.js'

class GetBalance{
  public async getBalance(address:string){
    let ActionsIn = new Actions()
    let api = await ActionsIn.init('wss://rpc.polkadot.io');
    const { nonce, data: balance } = await api.data.query.system.account(address);
    let free = await new Decimal(`${balance.free}`).div(new Decimal(Math.pow(10,10))).toString()
    return new Result(PredefinedStatus.SUCCESS(free))
  }
}
export { GetBalance }