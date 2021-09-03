import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getBlockField } from '../../fieldDefinition/getBlockField'
import { Actions } from '../index'

class GetBlock{
  public async getBlock(block:number|string){
    let ActionsIn = new Actions()
    let api = await ActionsIn.init('wss://rpc.polkadot.io');
    const blockHash = await api.data.rpc.chain.getBlockHash(block);
    const signedBlock = await api.data.rpc.chain.getBlock(blockHash);
    let Block = JSON.parse(`${signedBlock.block.header}`)
    return new Result(PredefinedStatus.SUCCESS(Block))
  }
}
export { GetBlock }