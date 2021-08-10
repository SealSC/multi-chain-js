import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetBlockNumber{
  public async getBlockNumber(){
    try{
      let blockNumber = await (window as any).web3.eth.getBlockNumber()
      return new Result(PredefinedStatus.SUCCESS(blockNumber))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlockNumber }