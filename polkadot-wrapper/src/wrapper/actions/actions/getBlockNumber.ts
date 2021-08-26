import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'

class GetBlockNumber{
  public async getBlockNumber(){
    try{
      let ActionsIn = new Actions()
      let api = await ActionsIn.init();
      const lastHdr = await api.data.rpc.chain.getHeader();
      return new Result(PredefinedStatus.SUCCESS(`${lastHdr.number}`))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlockNumber }