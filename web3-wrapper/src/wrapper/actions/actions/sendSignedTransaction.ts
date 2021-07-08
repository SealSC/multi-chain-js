import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class SendSignedTransaction{
  public async sendSignedTransaction(dataToSign:object){
    try{
      let signTransaction = await (window as any).web3.eth.sendSignedTransaction(dataToSign)
      return new Result(finedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
    
  }
}
export { SendSignedTransaction }