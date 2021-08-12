import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendTransaction{
  public async sendTransaction(transactionObject:object){
    try{
      return await (window as any).web3.eth.sendTransaction(transactionObject).then((receipt)=>{
        console.log(new Result(PredefinedStatus.SUCCESS(receipt)))
        return new Result(PredefinedStatus.SUCCESS(receipt))
      })
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(null))
    }
    
  }
}
export { SendTransaction }