import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetBalance{
  public async getBalance(address:string){
    try{
      let Balance = await (window as any).web3.eth.getBalance(address)
      console.log(Balance)
      return new Result(PredefinedStatus.SUCCESS(Balance))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBalance }