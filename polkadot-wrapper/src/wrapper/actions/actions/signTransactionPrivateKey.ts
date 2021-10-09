import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {signTransactionField } from '../../fieldDefinition/signTransactionField'

class SignTransactionPrivateKey{
  public async signTransactionPrivateKey(dataToSign:object|string,privateKey:string){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SignTransactionPrivateKey }