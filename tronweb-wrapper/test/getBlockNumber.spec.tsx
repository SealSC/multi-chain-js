import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('getBlockNumber', () => {
  it('Wallet installed getBlockNumberFunction', async () => {
    try{
      (window as any).isTronLink = await web3InstallisPhantom()
      let Action = await new Actions()
      let shouldGetBlockNumber = await Action.actions.getBlockNumber("123")
      let getBlockNumber = await (window as any).isTronLink.trx.getBlock("123")
      let data = getBlockNumber.block_header.raw_data.number
      let results = new Result(PredefinedStatus.SUCCESS(data))
      expect(shouldGetBlockNumber).to.deep.equal(results)
    }catch(err){
      let Action = await new Actions();
      let shouldGetBlockNumber = await Action.actions.getBlockNumber(-9);
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldGetBlockNumber).to.deep.equal(results)
    }
    
  }).timeout(100000)

  it('Wallet not installed getBlockNumberFunction', async () => {
    (window as any).isTronLink = {}
    let Action = await new Actions();
    let shouldGetBlockNumber = await Action.actions.getBlockNumber(-9);
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlockNumber).to.deep.equal(results)
  }).timeout(100000)

})
