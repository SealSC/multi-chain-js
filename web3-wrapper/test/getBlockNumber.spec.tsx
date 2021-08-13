import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlockNumber', () => {
  it('Wallet installed getBlockNumberFunction', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let shouldGetBlockNumber = await Action.actions.getBlockNumber()
    let getBlockNumber = await (window as any).web3.eth.getBlockNumber()
    let results = new Result(PredefinedStatus.SUCCESS(getBlockNumber))
    expect(shouldGetBlockNumber).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getBlockNumberFunction',async ()=>{
    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldGetBlockNumber = await Action.actions.getBlockNumber();
      
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlockNumber).to.deep.equal(results)

  }).timeout(100000) 

})
