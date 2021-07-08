import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class GetBlockNumber{
  public async getBlockNumber(){
    try{
      let blockNumber = await (window as any).web3.eth.getBlockNumber()
      return new Result(finedStatus.SUCCESS(blockNumber))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
   
  }
}
export { GetBlockNumber }