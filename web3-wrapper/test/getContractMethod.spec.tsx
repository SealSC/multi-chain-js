import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
import { getContractMethod } from '../src/wrapper/contractCall'
let ERC20 = require('../src/abis/ERC20-ABI.json')

describe('getContractMethod', () => {
  it('Wallet installed getContractMethod', async () => {
    try{
      (window as any).web3 = await web3Install()
      let Action = await new Actions()
      let ContractIn = await Action.contract.loadContract(ERC20, '0xf1a249C0675444A989d281dfE262D370AcCa8774')
      let ContractMethod = await getContractMethod(ContractIn.data, 'decimals', [])
      expect(ContractMethod).to.not.null
    }catch(error){
      let Action = await new Actions()
      let ContractIn = await Action.contract.loadContract(ERC20, '0xf1a249C0675444A989d281dfE262D370AcCa8774')
      let ContractMethod = await getContractMethod(ContractIn.data, 'decimals', [])
      expect(ContractMethod).to.be.null
    }
  }).timeout(100000)

  it('Wallet not installed getContractMethod', async () => {
    let Action = await new Actions()
    let ContractIn = await Action.contract.loadContract(ERC20, '0xf1a249C0675444A989d281dfE262D370AcCa8774')
    let ContractMethod = await getContractMethod(ContractIn.data, 'names', [])
    expect(ContractMethod).to.be.null
  }).timeout(100000)

})
