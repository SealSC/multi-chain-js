import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { getBlockField } from '../src/wrapper/fieldDefinition/getBlockField'
import { ApiPromise, WsProvider } from '@polkadot/api'

describe('getBlock', () => {

  it('getBlockFunction', async () => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const blockHash = await api.rpc.chain.getBlockHash(6521853);
    const signedBlock = await api.rpc.chain.getBlock(blockHash);
    let BlockInfo = JSON.parse(`${signedBlock.block.header}`)
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
    let Action = await new Actions()
    let shouldBlockHash = await Action.actions.getBlock(6521853)
    let results = new Result(PredefinedStatus.SUCCESS(blockDataField))
    expect(shouldBlockHash).to.deep.equal(results)
  }).timeout(100000)

})
