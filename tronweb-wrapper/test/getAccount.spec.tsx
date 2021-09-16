import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
// import { web3Install } from '../src/wrapper/web3'
import { tronWebInstall } from '../src/wrapper/tronweb'

describe('getAccount', () => {
  it('Wallet installed getAccountFunction', async ()=>{
    //console.log(2222);
    (window as any).tronWeb = await tronWebInstall()
   
    let Action = await new Actions()
    
    let shouldAccount = await Action.actions.getAccount()
    
    let Account = await (window as any).tronWeb.defaultAddress.base58
    let data=[Account]
    //console.log(Account,"Account.address")
    let results = new Result(PredefinedStatus.SUCCESS(data))
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)

  // it('Wallet not installed getAccountFunction',async ()=>{
  //   //(window as any).tronWeb = {}
  //   let Action = await new Actions();
  //   let shouldAccount = await Action.actions.getAccount();
      
  //   let results = new Result(PredefinedStatus.ERROR_STATE(null));
  //   expect(shouldAccount).to.deep.equal(results)

  // }).timeout(100000)

})
