import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('init', () => {

  it('init Funtion', async() => {
    (window as any).isPhantom = await web3InstallisPhantom()
    let Action = await new Actions();
    let init = await Action.init();
    expect((window as any).isPhantom).to.not.empty
  }).timeout(100000)


  it('Wallet not installed init',async ()=>{
    (window as any).isPhantom = {}
    let Action = await new Actions();
    let shouldAccount = await Action.init();
      
    let results = new Result(PredefinedStatus.SUCCESS(null));
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)
})
