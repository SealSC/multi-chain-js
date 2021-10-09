import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'
import Decimal from 'decimal.js'

class GetBalance{
  public async getBalance(address:string){
    const { nonce, data: balance } = await (window as any).api.query.system.account(address);
    let free = await new Decimal(`${balance.free}`).div(new Decimal(Math.pow(10,10))).toString()
    return new Result(PredefinedStatus.SUCCESS(free))
  }
}
export { GetBalance }