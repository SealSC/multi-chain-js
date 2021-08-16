import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let ERC20 = require('../src/abis/ERC20-ABI.json')

describe('loadContract', () => {

  it('Wallet installed loadContract', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let ContractIn = await Action.actions.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')     
    expect(ContractIn.data).to.not.empty 
  
  }).timeout(100000)
  
 

  it('Wallet not installed loadContract',async ()=>{
  
    (window as any).web3 = {}
    let Action = await new Actions();
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    expect(Contract.data).to.be.null
  
  }).timeout(100000)
  
  it('Wallet installed contract-call', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    let contractCall =  await Action.contract.offChainCall(Contract.data,'name',[],'','')
    //0xf1a249C0675444A989d281dfE262D370AcCa8774
    let resultContract = await new (window as any).web3.eth.Contract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774')

    let contractCallEql = await resultContract.methods.name().call()
    let results = new Result(PredefinedStatus.SUCCESS(contractCallEql))
    expect(contractCall).to.deep.equal(results)

  }).timeout(100000)

  it('Wrong parameter contract-call',async()=>{
    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    let contractCall =  await Action.contract.offChainCall(Contract.data,'namrs',[],'','')
    let results = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractCall).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed contract-call',async ()=>{
  
    (window as any).web3 = {}
    let Action = await new Actions();
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    let contractCall =  await Action.contract.offChainCall(Contract.data,'decimals',[],'','')
    let results = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractCall).to.deep.equal(results)
  
  }).timeout(100000)
    
  it('Wallet installed contract-send', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    let contractSend :any = await Action.contract.onChainCall(Contract.data,'approve',['0x5B6C6709d1000db91252c8c6E84B8987D1D10829','0'],{gasPrice:'4000000000',gasLimit:'150000'})

    if(contractSend.data) expect(contractSend.data.status).to.be.true
  
  }).timeout(100000)

  it('Wallet not installed contract-send',async ()=>{
  
    (window as any).web3 = {}
    let Action = await new Actions();
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    let contractSend :any = await Action.contract.onChainCall(Contract.data,'approve',['0x5B6C6709d1000db91252c8c6E84B8987D1D10829','0'],{gasPrice:'4000000000',gasLimit:'150000'})

    let reults = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractSend).to.deep.equal(reults)
  
  }).timeout(100000)

  it('Wrong parameter contract-send',async ()=>{
  
    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20,'0xf1a249C0675444A989d281dfE262D370AcCa8774');
    let contractSend :any = await Action.contract.onChainCall(Contract.data,'approve111',['0x0C78E2DF411F5e7AA630a90aba796e5947177683','0'],{gasPrice:'4000000000',gasLimit:'150000'})
    let reults = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractSend).to.deep.equal(reults)
  
  }).timeout(100000)

}).timeout(100000)
