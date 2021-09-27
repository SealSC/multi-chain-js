import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { web3Install } from '../../web3'

class SignWithWallet{
  public async signWithWallet(dataToSign:any|string){
    try{
      const sign = await (window as any).isPhantom.signMessage(dataToSign, "utf8");
      return new Result(PredefinedStatus.SUCCESS(sign))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignWithWallet }