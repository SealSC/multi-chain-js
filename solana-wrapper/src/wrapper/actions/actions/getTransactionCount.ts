import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetTransactionCount{
  public async getTransactionCount(){
    try{
      // let Transaction = await (window as any).web3.eth.getTransactionCount(address)
      // const connection = new (window as any).solanaWeb3.Connection(
      //   (window as any).solanaWeb3.clusterApiUrl("devnet"),
      //   "confirmed"
      // );
      let url = "https://api.testnet.solana.com";
      const connection = new (window as any).solanaWeb3.Connection(url);
      let Transaction =await connection.getTransactionCount().then((res) => {
      });
      return new Result(PredefinedStatus.SUCCESS(Transaction))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    
  }
}
export { GetTransactionCount }