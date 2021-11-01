import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('init', () => {

  it('init Funtion', async () => {
    try {
      let Action = await new Actions();
      let init = await Action.init();
      expect(init).to.not.empty
    } catch (error) {
      let Action = await new Actions()
      let init = await  Action.init();
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'))
      expect(init).to.deep.equal(results)
    }
  }).timeout(100000)

})
