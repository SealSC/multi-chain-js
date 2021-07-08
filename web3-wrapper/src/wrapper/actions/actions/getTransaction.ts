import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class GetTransaction{
  public async getTransaction(txHash:string){
    try{
      let Transaction = await (window as any).web3.eth.getTransaction(txHash)
      return new Result(finedStatus.SUCCESS(Transaction))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
  }
}
export { GetTransaction }