import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendSignedTransaction{
  public async sendSignedTransaction(privateKey:string){
    try{
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx("TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH", 100,"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",1);
      const signedtxn = await (window as any).tronWeb.trx.sign(tradeobj, privateKey);
      let signTransaction = await (window as any).tronWeb.trx.sendRawTransaction(signedtxn);
      // let aa={ result: true,
      //   transaction:
      //    { visible: false,
      //      txID:
      //       'f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e15b2d003712d72c92',
      //      raw_data:
      //       { contract: [Array],
      //         ref_block_bytes: '63c3',
      //         ref_block_hash: '0d248c2bc3eb218c',
      //         expiration: 1580983653000,
      //         timestamp: 1580983593572 },
      //      raw_data_hex:
      //       '0a0263c322080d248c2bc3eb218c4088a5e0cf812e5a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15417946f66d0fc67924da0ac9936183ab3b07c811261215418cb2ab880d4fa7b33c9645a2276dc9b192902e2d186470e4d4dccf812e',
      //      signature:
      //       [ '9aa0ca0a54b4bdfdc454f5c906eb65131eed75551b93185cc78027eec86059e55c78ec1d0f28021d136fb8b446864a47736d2b29b74b4ce08e69a6a0167292e300' ] } }
      // let bb={
            //   "status": true,
            //   "transactionHash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
            //   "transactionIndex": 0,
            //   "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
            //   "blockNumber": 3,
            //   "contractAddress": "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
            //   "cumulativeGasUsed": 314159,
            //   "gasUsed": 30234,
            //   "logs": [{
            //         // logs as returned by getPastLogs, etc.
            //     }, ...]
            // }
      // let data={

      // }
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(null))
    }
  }
}
export { SendSignedTransaction }