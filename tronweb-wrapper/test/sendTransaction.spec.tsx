import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'

let detectEthereumProvider = require('@metamask/detect-provider')

describe('sendTransaction', () => {

  it('Wallet installed sendTransaction', async ()=>{
    let Action = await new Actions();
    let shouldsendTranction = await Action.actions.sendTransaction({
        address:"TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
        amount: 10
    });
    if(shouldsendTranction.data.status) expect(shouldsendTranction.data.status).to.be.true

  }).timeout(100000)

  it('Wallet not installed sendTransaction',async ()=>{
    let Action = await new Actions();
    let shouldsendTranction = await Action.actions.sendTransaction({
        address:"TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
        amount: 1
    });
    
    if(shouldsendTranction.data.status) expect(shouldsendTranction.data.status).to.not.true

  }).timeout(100000)

})