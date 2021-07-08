import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class GetBalance{
  public async getBalance(address:string){
    try{
      let Balance = await (window as any).web3.eth.getBalance(address)
      return new Result(finedStatus.SUCCESS(Balance))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
   
  }
}
export { GetBalance }