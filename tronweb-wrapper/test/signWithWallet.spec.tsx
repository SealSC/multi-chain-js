import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('SignWithWallet', () => {
  
  it('Wallet installed SignWithWallet', async ()=>{
    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions();
    
    // let shouldSign = await Action.actions.signWithWallet("eee");
    // let sign = await (window as any).tronWeb.trx.signMessage("eee");
    // let results = new Result(PredefinedStatus.SUCCESS(sign));
    

    let shouldSign = await Action.actions.signWithWallet("eee");
      let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
      console.log(shouldSign,results,"PPP")
      expect(shouldSign).to.deep.equal(results)
  }).timeout(100000)

//   it('Wallet not installed SignWithWallet',async ()=>{
//     // (window as any).tronWeb = {}
//     let Action = await new Actions();
//     let shouldGetTransactionCount = await Action.actions.signWithWallet("2");
    
//     let results = new Result(PredefinedStatus.ERROR_STATE(null));
//     expect(shouldGetTransactionCount).to.deep.equal(results)

//   }).timeout(100000)
 
}).timeout(1000000)