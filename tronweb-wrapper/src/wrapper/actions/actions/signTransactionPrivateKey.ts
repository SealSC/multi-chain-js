// import { Result } from '../result'
// import PredefinedStatus  from '../../consts/consts'
// import {signTransactionField } from '../../fieldDefinition/signTransactionField'

// class SignTransactionPrivateKey{
//   public async signTransactionPrivateKey(dataToSign:object|string,privateKey:string){
//     try{
//       let signTransaction = await (window as any).web3.eth.accounts.signTransaction(dataToSign,privateKey)
//       return new Result(PredefinedStatus.SUCCESS(signTransaction))
//     }catch(err){
//       return new Result(PredefinedStatus.ERROR_STATE(null))
//     }
  
//   }
// }
// export { SignTransactionPrivateKey }

import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
// import {signTransactionField } from '../../fieldDefinition/signTransactionField'

class SignTransactionPrivateKey{
  public async signTransactionPrivateKey(dataToSign:object|string,privateKey:string){
    try{
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx("TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH", 10,"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",1);  
      let signTransaction = await (window as any).tronWeb.trx.sign(tradeobj, privateKey); 
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  
  }
}
export { SignTransactionPrivateKey }