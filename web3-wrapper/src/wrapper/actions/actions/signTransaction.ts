import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {signTransactionField } from '../../fieldDefinition/signTransactionField'

class SignTransaction{
  public async signTransaction(dataToSign:object|string,address:string){
    try{
      let signTransaction = await (window as any).web3.eth.signTransaction(dataToSign,address)
      let signTransactionData = new signTransactionField()
      signTransactionData.raw = signTransaction.raw
      signTransactionData.tx = signTransaction.tx
      return new Result(PredefinedStatus.SUCCESS(signTransactionData))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignTransaction }