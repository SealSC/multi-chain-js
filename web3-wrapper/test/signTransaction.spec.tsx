import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('signTransaction', () => {
   
  it('signTransaction Funtion', async() => {
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');

      let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
      expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)

})
