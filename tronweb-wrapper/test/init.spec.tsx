import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('init', () => {
  it('init Funtion', async () => {
    try{
      (window as any).isTronLink = await web3InstallisPhantom()
      let Action = await new Actions();
      let init = await Action.init();
      expect((window as any).isTronLink).to.not.empty
    }catch(err){
      let Action = await new Actions();
      let shouldAccount = await Action.init();
      let results = new Result(PredefinedStatus.SUCCESS(null));
      expect(shouldAccount).to.deep.equal(results)
    }
    
  }).timeout(100000)


  it('Wallet not installed init', async () => {
    (window as any).isTronLink = {}
    let Action = await new Actions();
    let shouldAccount = await Action.init();
    let results = new Result(PredefinedStatus.SUCCESS(null));
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)
})
