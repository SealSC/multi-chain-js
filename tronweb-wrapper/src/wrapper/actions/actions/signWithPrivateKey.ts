import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class SignWithPrivateKey {
  public async signWithPrivateKey(dataToSign:any, privateKey: string) {
    try {
      // let sign = await (window as any).web3.eth.accounts.sign(data,privateKey)
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.from, dataToSign.amount,dataToSign.to  );
      const signedtxn = await (window as any).tronWeb.trx.sign(tradeobj, privateKey);
      // let aa = {
      //   result: true,
      //   transaction:{
      //     visible: false,
      //     txID:'f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e15b2d003712d72c92',
      //     raw_data:
      //     {
      //       contract: [Array],
      //       ref_block_bytes: '63c3',
      //       ref_block_hash: '0d248c2bc3eb218c',
      //       expiration: 1580983653000,
      //       timestamp: 1580983593572
      //     },
      //     raw_data_hex:
      //       '0a0263c322080d248c2bc3eb218c4088a5e0cf812e5a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15417946f66d0fc67924da0ac9936183ab3b07c811261215418cb2ab880d4fa7b33c9645a2276dc9b192902e2d186470e4d4dccf812e',
      //     signature:
      //       ['9aa0ca0a54b4bdfdc454f5c906eb65131eed75551b93185cc78027eec86059e55c78ec1d0f28021d136fb8b446864a47736d2b29b74b4ce08e69a6a0167292e300']
      //   }
      // }
      // let bb = {
      //   message: 'Some data',
      //   messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
      //   v: '0x1c',
      //   r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
      //   s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
      //   signature: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c'
      // }
      let data = {
        signature:signedtxn.transaction.signature[0]
      }
      return new Result(PredefinedStatus.SUCCESS(data))
    } catch (err) {
      console.log(err, "SSS")
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignWithPrivateKey }