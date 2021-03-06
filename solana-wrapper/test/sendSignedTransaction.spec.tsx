import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('sendSignedTransaction', () => {

  it('Wallet installed sendSignedTransaction', async () => {
    try{
      (window as any).solanaWeb3 = await web3Install()
      let Action = await new Actions();
      let data = {
        from: 'BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU',
        to: '9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF',
        amount: 10
      }
      let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction(data);
      if (shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data).to.not.empty
    }catch(err){
      let Action = await new Actions();
      let data = {
        from: 'BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU',
        to: '9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF',
        amount: 10
      }
      let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction(data);
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'))
      expect(shouldsendSignedTransaction).to.deep.equal(results)
      
    }
    
  }).timeout(100000)

  it('Wallet not installed sendSignedTransaction', async () => {
    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let data = {
      from: 'BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU',
      to: '9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF',
      amount: 10
    }
    let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction(data);
    if (shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data.status).to.not.true
  }).timeout(100000)
})
