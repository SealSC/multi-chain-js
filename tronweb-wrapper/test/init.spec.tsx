import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('init', () => {

  it('init Funtion', async() => {
    let Action = await new Actions();
    let init = await Action.init();
    expect((window as any).tronWeb).to.not.empty
  }).timeout(100000)
  
})
