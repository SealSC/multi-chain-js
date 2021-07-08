import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class SignTransaction{
  public async signTransaction(dataToSign:object|string,address:string){
    try{
      let signTransaction = await (window as any).web3.eth.signTransaction(dataToSign,address)
      return new Result(finedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
   
  }
}
export { SignTransaction }