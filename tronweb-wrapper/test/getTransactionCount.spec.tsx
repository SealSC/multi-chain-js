import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('getTransactionCount', () => {
   
  it('Wallet installed getTransactionCountFunction', async ()=>{

    (window as any).isPhantom = await web3InstallisPhantom()
    let Action = await new Actions();
    let shouldGetTransactionCount = await Action.actions.getTransactionCount();
      
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
    expect(shouldGetTransactionCount).to.deep.equal(results)

  }).timeout(100000)

})
