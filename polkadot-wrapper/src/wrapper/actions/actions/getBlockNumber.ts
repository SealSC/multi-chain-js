import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetBlockNumber{
  public async getBlockNumber(){
    try{
      const signedBlock = await (window as any).api.rpc.chain.getBlock();
      return new Result(PredefinedStatus.SUCCESS(signedBlock.blockNumber))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlockNumber }