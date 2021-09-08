import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getBlockField } from '../../fieldDefinition/getBlockField'
import { Actions } from '../index'

class GetBlock{
  public async getBlock(block:number|string){
    const blockHash = await (window as any).api.rpc.chain.getBlockHash(block);
    const signedBlock = await (window as any).api.rpc.chain.getBlock(blockHash);
    let Block = JSON.parse(`${signedBlock.block.header}`)
    return new Result(PredefinedStatus.SUCCESS(Block))
  }
}
export { GetBlock }