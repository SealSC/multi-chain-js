import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {signTransactionField } from '../../fieldDefinition/signTransactionField'

class SignTransaction{
  public async signTransaction(dataToSign:object|string,address:string){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SignTransaction }