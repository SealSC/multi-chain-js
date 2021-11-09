import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/web3'

describe('getAccount', () => {
  it('Wallet installed getAccountFunction', async () => {
    try{
      (window as any).isPhantom = await web3InstallisPhantom()
      let Action = await new Actions()
      let shouldAccount = await Action.actions.getAccount()
  
      await (window as any).solana.off().connect()
      let Account = (window as any).solana.publicKey.toBase58()
      let results = new Result(PredefinedStatus.SUCCESS([Account]))
      expect(shouldAccount).to.deep.equal(results)
    }catch(err){
      let Action = await new Actions()
      let shouldAccount = await Action.actions.getAccount()
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'))
      expect(shouldAccount).to.deep.equal(results)
    }
    
  }).timeout(100000)

  it('Wallet not installed getAccountFunction', async () => {
    (window as any).isPhantom = {}
    let Action = await new Actions();
    let shouldAccount = await Action.actions.getAccount();
    let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)
})
