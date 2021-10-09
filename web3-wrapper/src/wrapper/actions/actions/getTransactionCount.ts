import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetTransactionCount{
  public async getTransactionCount(address:string){
    try{
      let Transaction = await (window as any).web3.eth.getTransactionCount(address)
      return new Result(PredefinedStatus.SUCCESS(Transaction))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    
  }
}
export { GetTransactionCount }