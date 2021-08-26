import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'

class GetBalance{
  public async getBalance(address:string){
    try{
      let ActionsIn = new Actions()
      let api = await ActionsIn.init();
      const { nonce, data: balance } = await api.data.query.system.account(address);
      return new Result(PredefinedStatus.SUCCESS(`${balance.free}`))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBalance }