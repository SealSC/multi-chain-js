import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('init', () => {

  it('init Funtion', async() => {
    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions();
    let init = await Action.init();
    expect((window as any).tronWeb).to.not.empty
  }).timeout(100000)


  it('Wallet not installed init',async ()=>{
    // (window as any).tronWeb.trx = {}
    // let Action = await new Actions();
    // let shouldAccount = await Action.actions.getAccount('TPCgprwAAFBSgryLYUDiY9ifAoUYwqd');
      
    // let results = new Result(PredefinedStatus.ERROR_STATE(null));
    // expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)
})
