import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getBlockField } from '../../fieldDefinition/getBlockField'

class GetBlock{
  public async getBlock(blockHash:number|string){
    try{
      const signedBlock = await (window as any).api.rpc.chain.getBlock(blockHash);
      return new Result(PredefinedStatus.SUCCESS(signedBlock))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlock }