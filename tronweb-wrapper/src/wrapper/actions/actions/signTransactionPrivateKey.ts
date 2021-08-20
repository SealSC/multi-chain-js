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
    //   let aa = { result: true,
    //     transaction:{ visible: false,
    //        txID:'f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e15b2d003712d72c92',
    //        raw_data:{ contract: [Array],
    //           ref_block_bytes: '63c3',
    //           ref_block_hash: '0d248c2bc3eb218c',
    //           expiration: 1580983653000,
    //           timestamp: 1580983593572 
    //         },
    //        raw_data_hex:'0a0263c322080d248c2bc3eb218c4088a5e0cf812e5a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15417946f66d0fc67924da0ac9936183ab3b07c811261215418cb2ab880d4fa7b33c9645a2276dc9b192902e2d186470e4d4dccf812e',
    //        signature:[ '9aa0ca0a54b4bdfdc454f5c906eb65131eed75551b93185cc78027eec86059e55c78ec1d0f28021d136fb8b446864a47736d2b29b74b4ce08e69a6a0167292e300' ] 
    //       } 
    //     }

    //   let bb = {
    //     messageHash: '0x31c2f03766b36f0346a850e78d4f7db2d9f4d7d54d5f272a750ba44271e370b1',
    //     v: '0x25',
    //     r: '0xc9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895',
    //     s: '0x727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68',
    //     rawTransaction: '0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68',
    //     transactionHash: '0xde8db924885b0803d2edc335f745b2b8750c8848744905684c20b987443a9593'
    // }
    
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  
  }
}
export { SignTransactionPrivateKey }