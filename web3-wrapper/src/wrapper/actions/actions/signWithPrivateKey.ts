import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SignWithPrivateKey{
  public async signWithPrivateKey(data:string|string,privateKey:string){
    try{
      let sign = await (window as any).web3.eth.accounts.sign(data,privateKey)
      return new Result(PredefinedStatus.SUCCESS(sign))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    
  }
}
export { SignWithPrivateKey }