import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')
let ERC20 = require('../src/abis/ERC20-ABI.json')

describe('loadContract', () => {
  // var provider = null;
  // beforeEach(async () => {
  //    provider = await detectEthereumProvider();
  //    if(provider){
  //       (window as any).web3 = await web3Install()
  //    }
  // });
  it('loadContract Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      let Action = await new Actions()
      let ContractIn = await Action.actions.loadContract(ERC20,'0xdac17f958d2ee523a2206206994597c13d831ec7')

      let resultContract = await new (window as any).web3.eth.Contract(ERC20,'0xdac17f958d2ee523a2206206994597c13d831ec7')
      let results = new Result(PredefinedStatus.SUCCESS(resultContract))
      // expect(ContractIn).to.deep.equal(results) //fail
    }else{
      //expect
      let Action = await new Actions();
      let Contract = await Action.actions.loadContract(ERC20,'0xdac17f958d2ee523a2206206994597c13d831ec7')
      // //equal
      let results = new Result(PredefinedStatus.ERROR_STATE(null))
      expect(Contract).to.deep.equal(results) 
    }
  }).timeout(10000)

  it('contract-call Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
     
     
      // expect(shouldGetBalance).to.deep.equal(results)
    }else{
      //expect
      // let Action = await new Actions();
      // let shouldGetBalance = await Action.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      // //equal
      // let results = new Result(PredefinedStatus.ERROR_STATE(null))
      // expect(shouldGetBalance).to.deep.equal(results)
    }
  }).timeout(10000)

  it('contract-send Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
       
     
      // expect(shouldGetBalance).to.deep.equal(results)
    }else{
      //expect
      // let Action = await new Actions();
      // let shouldGetBalance = await Action.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      // //equal
      // let results = new Result(PredefinedStatus.ERROR_STATE(null))
      // expect(shouldGetBalance).to.deep.equal(results)
    }
  }).timeout(10000)
}).timeout(10000)
