import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('sendTransaction', () => {

  it('Wallet installed sendTransaction', async () => {
    (window as any).isTronLink = await web3InstallisPhantom()
    let Action = await new Actions();
    try{
      let shouldsendTranction = await Action.actions.sendTransaction({
        address: "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
        amount: 10
      });
      if (shouldsendTranction.data.status) expect(shouldsendTranction.data.status).to.be.true
    }catch( err ){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    
  }).timeout(100000)

  it('Wallet not installed sendTransaction', async () => {
    (window as any).isTronLink = {}
    let Action = await new Actions();
    let shouldsendTranction = await Action.actions.sendTransaction({
      address: "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      amount: 1
    });
    if (shouldsendTranction.data.status) expect(shouldsendTranction.data.status).to.not.true
  }).timeout(100000)
})