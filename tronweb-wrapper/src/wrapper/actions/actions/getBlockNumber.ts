import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetBlockNumber{
  public async getBlockNumber(block:string|number){
    try{
      let blockNumber = await (window as any).isPhantom.trx.getBlock(block)
      let data=blockNumber.block_header.raw_data.number
      return new Result(PredefinedStatus.SUCCESS(data))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlockNumber }