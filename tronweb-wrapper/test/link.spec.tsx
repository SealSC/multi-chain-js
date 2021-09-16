import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
// let detectEthereumProvider = require('@metamask/detect-provider')

describe('link', () => {
  it('Wallet installed linkFunction', async ()=>{
    // (window as any).web3 = await web3Install()
    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions()
    let shouldAccount: any = await Action.connector.link();
    
    let accountSelect = (window as any).tronWeb.defaultAddress.base58
    let results = new Result(PredefinedStatus.SUCCESS(accountSelect))  
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed linkFunction',async ()=>{
    //(window as any).tronWeb = {}
    // (window as any).web3 = {};
    // (window as any).ethereum.enable = null;
    // let Action = await new Actions();
    // let shouldGetBalance: any = await Action.connector.link();
    // let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    // expect(shouldGetBalance).to.deep.equal(results)

  }).timeout(100000)
   
})