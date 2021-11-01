import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlockNumber', () => {
  it('Wallet installed getBlockNumberFunction', async () => {
    try{
      (window as any).solanaWeb3 = await web3Install()
      let Action = await new Actions()
      let shouldGetBlockNumber = await Action.actions.getBlockNumber(9603492)
      const connection = new (window as any).solanaWeb3.Connection(
  
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      let getBlockNumber = await connection.getBlock(9603492).blockHeight
      let results = new Result(PredefinedStatus.SUCCESS(getBlockNumber))
      expect(shouldGetBlockNumber).to.deep.equal(results)
    }catch(err){
      let Action = await new Actions();
      let shouldGetBlockNumber = await Action.actions.getBlockNumber(9603492);
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
      expect(shouldGetBlockNumber).to.deep.equal(results)
    }
    
  }).timeout(100000)

  it('Wallet not installed getBlockNumberFunction', async () => {
    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldGetBlockNumber = await Action.actions.getBlockNumber(9603492);
    let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
    expect(shouldGetBlockNumber).to.deep.equal(results)
  }).timeout(100000)
})
