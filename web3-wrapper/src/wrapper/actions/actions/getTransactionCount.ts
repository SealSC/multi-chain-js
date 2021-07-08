import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class GetTransactionCount{
  public async getTransactionCount(address:string){
    try{
      let Transaction = await (window as any).web3.eth.getTransactionCount(address)
      return new Result(finedStatus.SUCCESS(Transaction))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
    
  }
}
export { GetTransactionCount }