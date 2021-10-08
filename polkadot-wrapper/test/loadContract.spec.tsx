import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'

describe('loadContract', () => {

  it('loadContract', async ()=>{

    let Action = await new Actions()
    let loadContract= await Action.contract.loadContract(2,'5FHzNsnjj7bbTsPXUB3D3pkZZNpJBn6fyvMBMuq1CfDXd5fo')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(loadContract).to.deep.equal(results)
  
  }).timeout(100000)
  
  
  it('contract-call', async ()=>{
 
    let Action = await new Actions()
    let offChainCall= await Action.contract.offChainCall(1,'name',[],'','')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(offChainCall).to.deep.equal(results)

  }).timeout(100000)
    
  it('contract-send', async ()=>{
    let Action = await new Actions()
    let onChainCall= await Action.contract.onChainCall(1,'appover',[],'',)
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(onChainCall).to.deep.equal(results)
  }).timeout(100000)

}).timeout(100000)
