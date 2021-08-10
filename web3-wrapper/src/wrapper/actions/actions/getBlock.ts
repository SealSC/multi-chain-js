import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getBlockField } from '../../fieldDefinition/getBlockField'

class GetBlock{
  public async getBlock(block:number|string){
    try{
      let blockData = await (window as any).web3.eth.getBlock(block)
      let blockDataField = new getBlockField()
      blockDataField.number = blockData.number
      blockDataField.hash = blockData.hash
      blockDataField.parentHash = blockData.parentHash
      blockDataField.nonce = blockData.nonce
      blockDataField.sha3Uncles = blockData.sha3Uncles
      blockDataField.logsBloom = blockData.logsBloom
      blockDataField.transactionsRoot = blockData.transactionsRoot
      blockDataField.stateRoot = blockData.stateRoot
      blockDataField.miner = blockData.miner
      blockDataField.difficulty = blockData.difficulty
      blockDataField.totalDifficulty = blockData.totalDifficulty
      blockDataField.size = blockData.size
      blockDataField.extraData = blockData.extraData
      blockDataField.gasLimit = blockData.gasLimit
      blockDataField.gasUsed = blockData.gasUsed
      blockDataField.timestamp = blockData.timestamp
      blockDataField.transactions = blockData.transactions
      blockDataField.uncles = blockData.uncles
      return new Result(PredefinedStatus.SUCCESS(blockDataField))
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(err))
    }
  }
}
export { GetBlock }