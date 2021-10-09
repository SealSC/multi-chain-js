import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getBlockField } from '../../fieldDefinition/getBlockField'
import { Actions } from '../index'

<<<<<<< HEAD

=======
>>>>>>> main
class GetBlock{
  public async getBlock(block:number|string){
    const blockHash = await (window as any).api.rpc.chain.getBlockHash(block);
    const signedBlock = await (window as any).api.rpc.chain.getBlock(blockHash);
<<<<<<< HEAD
    let BlockInfo =  JSON.parse(`${signedBlock.block.header}`)
    let blockDataField = new getBlockField()
    blockDataField.number = BlockInfo.number
    blockDataField.hash = null
    blockDataField.parentHash = BlockInfo.parentHash
    blockDataField.nonce = null
    blockDataField.sha3Uncles = null
    blockDataField.logsBloom = null
    blockDataField.transactionsRoot = null
    blockDataField.stateRoot = BlockInfo.stateRoot
    blockDataField.miner = null
    blockDataField.difficulty = null
    blockDataField.totalDifficulty = null
    blockDataField.size = null
    blockDataField.extraData = null
    blockDataField.gasLimit = null
    blockDataField.gasUsed = null
    blockDataField.timestamp = null
    blockDataField.transactions = null
    blockDataField.uncles = null
    return new Result(PredefinedStatus.SUCCESS(blockDataField))
=======
    let Block = JSON.parse(`${signedBlock.block.header}`)
    return new Result(PredefinedStatus.SUCCESS(Block))
>>>>>>> main
  }
}
export { GetBlock }