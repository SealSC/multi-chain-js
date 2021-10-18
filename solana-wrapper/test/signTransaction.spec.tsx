import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('signTransaction', () => {

  it('signTransaction Function', async () => {
    (window as any).solanaWeb3 = await web3Install()
    let Action = await new Actions();
    let shouldSigntranction = await Action.actions.signTransaction('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
    if (shouldSigntranction.data) expect(shouldSigntranction.data).to.not.empty
  }).timeout(100000)

})
