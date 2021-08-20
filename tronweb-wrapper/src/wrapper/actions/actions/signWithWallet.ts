import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SignWithWallet{
  public async signWithWallet(dataToSign:object|string,address?:string){
    try{
      const signedtxn = await (window as any).tronWeb.trx.signMessage(dataToSign);
      return new Result(PredefinedStatus.SUCCESS(signedtxn))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    
  }
}
export { SignWithWallet }