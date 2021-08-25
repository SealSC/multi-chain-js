import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SignWithWallet{

  public async signWithWallet(dataToSign:string){
    // try{
    //   console.log(1111)
    //   console.log(await (window as any).tronWeb.trx,"#####$$$$$")
    //   const signedtxn = await (window as any).tronWeb.trx.signMessage(dataToSign);
    //   return new Result(PredefinedStatus.SUCCESS(signedtxn))
    // }catch(err){
    //   console.log(2222)
    //   return new Result(PredefinedStatus.ERROR_STATE(null))
    // }
    return new Result(PredefinedStatus.NOT_SUPPORT(null))

  }
}
export { SignWithWallet }