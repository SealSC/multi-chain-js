import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetBlockNumber{
  public async getBlockNumber(){
    try{
      const lastHdr = await (window as any).api.rpc.chain.getHeader();
      return new Result(PredefinedStatus.SUCCESS(`${lastHdr.number}`))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlockNumber }