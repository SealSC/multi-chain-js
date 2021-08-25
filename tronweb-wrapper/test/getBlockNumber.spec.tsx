import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlockNumber', () => {
  it('Wallet installed getBlockNumberFunction', async ()=>{

    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions()
    let shouldGetBlockNumber = await Action.actions.getBlockNumber("123")
    let getBlockNumber = await (window as any).tronWeb.trx.getBlock("123")
    let data=getBlockNumber.block_header.raw_data.number
    let results = new Result(PredefinedStatus.SUCCESS(data))
    expect(shouldGetBlockNumber).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed getBlockNumberFunction',async ()=>{
    (window as any).tronWeb = {}
    let Action = await new Actions();
    let shouldGetBlockNumber = await Action.actions.getBlockNumber(-9);
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlockNumber).to.deep.equal(results)

  }).timeout(100000) 

})
