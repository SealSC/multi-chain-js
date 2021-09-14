import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
// import { web3Install } from '../src/wrapper/web3'
import { tronWebInstall } from '../src/wrapper/tronweb'

describe('getAccount', () => {
  it('Wallet installed getAccountFunction', async ()=>{
    (window as any).tronWeb = await tronWebInstall()
   
    let Action = await new Actions()
    
    let shouldAccount = await Action.actions.getAccount("TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb")
    
    let Account = await (window as any).tronWeb.trx.getAccount("TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb")
    let data=[Account.address]
    console.log(Account.address,"Account.address")
    let results = new Result(PredefinedStatus.SUCCESS(data))
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed getAccountFunction',async ()=>{
    // (window as any).tronWeb.trx = {}
    let Action = await new Actions();
    let shouldAccount = await Action.actions.getAccount('TPCgprwAAFBSgryLYUDiY9ifAoUYwqd');
      
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)

})
