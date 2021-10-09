import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendSignedTransaction{
  public async sendSignedTransaction(dataToSign:string){
    try{
      let signTransaction = await (window as any).web3.eth.sendSignedTransaction(dataToSign)
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(null))
    }
    
  }
}
export { SendSignedTransaction }