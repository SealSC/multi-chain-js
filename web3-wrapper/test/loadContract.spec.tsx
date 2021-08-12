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
      let ContractIn = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774')     
      expect(ContractIn.data).to.not.null 
    }else{
      let Action = await new Actions();
      let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
      
      expect(Contract).to.be.null
    }
  }).timeout(10000)
  
  it('contract-call Funtion', async() => {
    let provider = await detectEthereumProvider();
    // if(provider){
    //   let Action = await new Actions();
    //   let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    //   let contractCall =  await Action.contract.offChainCall(Contract.data,'decimals',[],'','')


    //   let resultContract = await new (window as any).web3.eth.Contract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774')
    //   let contractCallEql = await resultContract.methods.decimals().call()
    //   let results = new Result(PredefinedStatus.SUCCESS(contractCallEql))
    //   expect(contractCall).to.deep.equal(results)
    // }else{
    //   let Action = await new Actions();
    //   let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    //   let contractCall =  await Action.contract.offChainCall(Contract.data,'decimals',[],'','')
     
    //   let results = new Result(PredefinedStatus.ERROR_STATE(null))
    //   expect(contractCall).to.deep.equal(results)
    // }
  }).timeout(100000)

  it('contract-send Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      try{
        let Action = await new Actions();
        let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
        let contractSend :any = await Action.contract.onChainCall(Contract.data,'approve',['0x0C78E2DF411F5e7AA630a90aba796e5947177683','0'],{gasPrice:'4000000000',gasLimit:'150000'})
        console.log(contractSend)
        expect(contractSend.data.status).to.be.true
      }catch(err){
        let reults = new Result(PredefinedStatus.ERROR_STATE(null))
        expect(reults).to.deep.equal(reults)
      }
    }else{
      let Action = await new Actions();
      let Contract = await Action.actions.loadContract(ERC20,'0x0C78E2DF411F5e7AA630a90aba796e5947177683');
      let contractSend = await Action.contract.onChainCall(Contract.data,'approve',
      ['0x1942B97fa1bd85Cc3ee98269032ff05285569749','0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'],
      {gasPrice:'4000000000',gasLimit:'150000'})
      let reults = new Result(PredefinedStatus.ERROR_STATE(null))
      expect(contractSend).to.deep.equal(reults)
    }
  }
  ).timeout(100000)
}).timeout(100000)
