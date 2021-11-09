import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBalance', () => {

  it('Wallet installed getBalanceFunction', async ()=>{
    try{
      (window as any).web3 = await web3Install()
      let Action = await new Actions()
      let shouldBalance = await Action.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      let Balance = await (window as any).web3.eth.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829')
      let results = new Result(PredefinedStatus.SUCCESS(Balance))  
      expect(shouldBalance).to.deep.equal(results)
    }catch(error){
      let Action = await new Actions()
      let shouldBalance = await Action.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      let results = new Result(PredefinedStatus.ERROR_STATE(null))  
      expect(shouldBalance).to.deep.equal(results)
    }
  }).timeout(100000)

  it('Wallet not installed getBalanceFunction',async ()=>{

    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldBalance = await Action.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
    let results = new Result(PredefinedStatus.ERROR_STATE(null))
    expect(shouldBalance).to.deep.equal(results)

  }).timeout(100000)
   
})
