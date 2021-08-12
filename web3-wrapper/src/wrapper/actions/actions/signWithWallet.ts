import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SignWithWallet{
  public async signWithWallet(dataToSign:object|string,address:string){
    try{
      let dataSign = await (window as any).web3.utils.utf8ToHex(dataToSign)
      let sign = await (window as any).web3.eth.personal.sign(dataSign,address)
      return new Result(PredefinedStatus.SUCCESS(sign))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    
  }
}
export { SignWithWallet }