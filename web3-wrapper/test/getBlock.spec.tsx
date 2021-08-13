import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
import { getBlockField } from '../src/wrapper/fieldDefinition/getBlockField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlock', () => {
   

  it('Wallet installed getBlockFunction', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let shouldGetBlock = await Action.actions.getBlock(9603492);
    let blockData = await (window as any).web3.eth.getBlock(9603492);
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
    let results = new Result(PredefinedStatus.SUCCESS(blockDataField));
    expect(shouldGetBlock).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getBlockFunction',async ()=>{

    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldGetBlock = await Action.actions.getBlock(9603492);
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlock).to.deep.equal(results)

  }).timeout(100000)

})
