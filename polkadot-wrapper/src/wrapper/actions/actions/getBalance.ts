import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetBalance{
  public async getBalance(address:string){
    try{
      const { nonce, data: balance } = await (window as any).api.query.system.account(address);
      return new Result(PredefinedStatus.SUCCESS(`${balance.free}`))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBalance }