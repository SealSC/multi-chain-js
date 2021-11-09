import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('signTransaction', () => {

  it('signTransaction Function', async () => {
    try{
      (window as any).solanaWeb3 = await web3Install()
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransaction('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
      if (shouldSigntranction.data) expect(shouldSigntranction.data).to.not.empty
    }catch(err){
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransaction('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
        expect(shouldSigntranction).to.deep.equal(results)
    }
    
  }).timeout(100000)

  it('Wallet not installed signTransaction', async () => {
    (window as any).solanaWeb3 = {}
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransaction('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
      expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)
})
