import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class GetBlock {
  public async getBlock(block: number | string) {
    try {
      let blockData = await (window as any).isTronLink.trx.getBlock(block)
      let data = {
        "number": blockData.block_header.raw_data.number,
        "parentHash": blockData.block_header.raw_data.parentHash,
        "miner": blockData.block_header.raw_data.witness_address,
        "timestamp": blockData.block_header.raw_data.timestamp,
        'hash': blockData.blockID,
        'nonce': null,
        'sha3Uncles': null,
        'logsBloom': null,
        'transactionsRoot': blockData.block_header.raw_data.txTrieRoot,
        'stateRoot': null,
        'difficulty': null,
        'totalDifficulty': null,
        'extraData': null,
        'size': null,
        'gasLimit': null,
        'gasUsed': null,
        'transactions': blockData.transactions ? blockData.transactions.length : 0,
        'uncles': null
      }
      return new Result(PredefinedStatus.SUCCESS(data))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetBlock }