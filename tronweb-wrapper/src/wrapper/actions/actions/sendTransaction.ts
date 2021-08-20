import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendTransaction{
  public async sendTransaction(transactionObject:any){
    try{
      return await (window as any).tronWeb.trx.sendTransaction(transactionObject.address,transactionObject.amount).then((receipt)=>{
        // let aa = { 
        //   result: true,
        //   transaction:
        //    { visible: false,
        //      txID:
        //       'f8f70731df59b4d7d8159df705f0f7289cd2a037187dda043e28c77287b12e11',
        //      raw_data:
        //       { contract: [Array],
        //         ref_block_bytes: 'b3e2',
        //         ref_block_hash: '3778f8d30f91eb00',
        //         expiration: 1579075530000,
        //         timestamp: 1579075470470 },
        //      raw_data_hex:
        //       '0a02b3e222083778f8d30f91eb004090daf1c1fa2d5a66080112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412310a15417946f66d0fc67924da0ac9936183ab3b07c81126121541d3136787e667d1e055d2cd5db4b5f6c88056304918e807708689eec1fa2d',
        //      signature:
        //       [ 'd0839fd236016149da98ddd3dcd2f1dfcfd11aabee8a27ffae50b1323ed4ad6a259c2d48c983c7d0c786e373d2a90c48adc91f33b82be07efffaa7d57e4d3f6000' ] 
        //     } 
        //   }
          // let bb = {
          //   "status": true,
          //   "transactionHash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
          //   "transactionIndex": 0,
          //   "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
          //   "blockNumber": 3,
          //   "contractAddress": "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
          //   "cumulativeGasUsed": 314159,
          //   "gasUsed": 30234,
          //   "logs": [{
          //          // logs as returned by getPastLogs, etc.
          //      }, ...]
          // }
        //     message:'success'
        // }
        // let data={}
        return new Result(PredefinedStatus.SUCCESS(receipt))
      })
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(null))
    }
    
  }
}
export { SendTransaction }