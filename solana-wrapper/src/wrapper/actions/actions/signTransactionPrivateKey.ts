import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SignTransactionPrivateKey{
  public async signTransactionPrivateKey(dataToSign:object|string,privateKey:string){
    // try{
    //   let signTransaction = await (window as any).web3.eth.accounts.signTransaction(dataToSign,privateKey)
    //   return new Result(PredefinedStatus.SUCCESS(signTransaction))
    // }catch(err){
    //   return new Result(PredefinedStatus.ERROR_STATE(null))
    // }
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SignTransactionPrivateKey }