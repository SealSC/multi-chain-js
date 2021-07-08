import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class GetBlock{
  public async getBlock(block:number|string){
    try{
      let blockData = await (window as any).web3.eth.getBlock(block)
      return new Result(finedStatus.SUCCESS(blockData))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
  }
}
export { GetBlock }