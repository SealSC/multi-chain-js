import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

let detectEthereumProvider = require('@metamask/detect-provider')

describe('sendTransaction', () => {

  it('Wallet installed sendTransaction', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions();
    let shouldsendTranction = await Action.actions.sendTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        value: '10'
    });
    if(shouldsendTranction.data) expect(shouldsendTranction.data.status).to.be.true

  }).timeout(100000)

  it('Wallet not installed sendTransaction',async ()=>{

    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldsendTranction = await Action.actions.sendTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        value: '1'
    });
    
    if(shouldsendTranction.data) expect(shouldsendTranction.data.status).to.not.true

  }).timeout(100000)

})
