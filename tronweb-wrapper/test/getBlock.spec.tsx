import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlock', () => {
  it('Wallet installed getBlockFunction', async () => {
    try{
      (window as any).isTronLink = await web3InstallisPhantom()
      let Action = await new Actions()
      let shouldGetBlock = await Action.actions.getBlock(17584567);
      let blockData = await (window as any).isTronLink.trx.getBlock(17584567);
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
      let results = new Result(PredefinedStatus.SUCCESS(data));
      expect(shouldGetBlock).to.deep.equal(results)
    }catch(err){
      let Action = await new Actions();
      let shouldGetBlock = await Action.actions.getBlock(-7);
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldGetBlock).to.deep.equal(results)
    }
    

  }).timeout(100000)



  it('Wallet not installed getBlockFunction', async () => {
    (window as any).isTronLink = {}
    let Action = await new Actions();
    let shouldGetBlock = await Action.actions.getBlock(-7);
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlock).to.deep.equal(results)
  }).timeout(100000)

})
