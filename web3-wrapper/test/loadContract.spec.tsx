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
    //   let Action = await new Actions()
    //   let ContractIn = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774')

    //   let resultContract = await new (window as any).web3.eth.Contract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774')
    //   let results = new Result(PredefinedStatus.SUCCESS(resultContract))
    //   console.log(ContractIn)
    //   console.log(results)
    //   expect(ContractIn).to.deep.equal(results) //fail
    // }else{
    //   //expect
    //   let Action = await new Actions();
    //   let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    //   //equal
    //   let results = new Result(PredefinedStatus.ERROR_STATE(null))
    //   expect(Contract).to.deep.equal(results) 
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
  }).timeout(10000)

  it('contract-send Funtion', async() => {
    let provider = await detectEthereumProvider();
    // if(provider){
    //   let Action = await new Actions();
    //   // await Action.connector.link()
    //   let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    //   let contractSend = await Action.contract.onChainCall(Contract.data,'approve',
    //   ['0x1942B97fa1bd85Cc3ee98269032ff05285569749','0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'],
    //   {gasPrice:'4000000000',gasLimit:'150000'})
      

    //   let resultContract = await new (window as any).web3.eth.Contract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774')
    //   let contractSendEql = await resultContract.methods.approve('0x1942B97fa1bd85Cc3ee98269032ff05285569749','0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
    //   .send({from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",gas:100000})
    //   let results = new Result(PredefinedStatus.SUCCESS(contractSendEql))
    //   expect(contractSend).to.deep.equal(results)
    // }else{
    //   let Action = await new Actions();
    //   let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    //   let contractSend = await Action.contract.onChainCall(Contract.data,'approve',
    //   ['0x1942B97fa1bd85Cc3ee98269032ff05285569749','0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'],
    //   {gasPrice:'4000000000',gasLimit:'150000'})

    //   let results = new Result(PredefinedStatus.ERROR_STATE(null))
    //   expect(contractSend).to.deep.equal(results)
    // }
  }
  ).timeout(10000)
}).timeout(10000)
