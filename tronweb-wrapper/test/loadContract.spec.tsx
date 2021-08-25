import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
let ERC20 = require('../src/abis/ERC20-ABI.json')

describe('loadContract', () => {

  it('Wallet installed loadContract', async () => {
    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions()
    let ContractIn = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS')
    expect(ContractIn.data).to.not.empty
  }).timeout(100000)



  it('Wallet not installed loadContract', async () => {
    (window as any).tronWeb = {}
    let Action = await new Actions();
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');
    // expect(Contract.data).to.not.empty
    expect(Contract.data).to.be.null
  }).timeout(100000)




  it('Wallet installed contract-call', async () => {
    (window as any).tronWeb = await tronWebInstall()
   
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');

    let contractCall = await Action.contract.offChainCall(Contract.data, 'name', [], '', '')
    let resultContract = await (window as any).tronWeb.contract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS')
    
    let contractCallEql = await resultContract["name"]().call()
    let results = new Result(PredefinedStatus.SUCCESS(contractCallEql))
    
    expect(contractCall).to.deep.equal(results)
  }).timeout(100000)

  it('Wrong parameter contract-call', async () => {
    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');
    let contractCall = await Action.contract.offChainCall(Contract.data, 'namrs', [], '', {
      price: "4000000000",
      limit: "150000",
      shouldPollResponse: true,
  })
    let results = new Result(PredefinedStatus.ERROR_STATE('参数有误'))

    expect(contractCall).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed contract-call', async () => {
    (window as any).tronWeb = {}
    let Action = await new Actions();
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');
    let contractCall = await Action.contract.offChainCall(Contract.data, 'decimalss', [], '', {
      price: "4000000000",
      limit: "150000",
      shouldPollResponse: true,
  })
    let results = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractCall).to.deep.equal(results)
  }).timeout(100000)



  it('Wallet installed contract-send', async () => {
    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');
    let contractSend: any = await Action.contract.onChainCall(Contract.data, 'approve', ['TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS', '0'], {
      price: "4000000000",
      limit: "150000",
      shouldPollResponse: true,
  })
    if (contractSend.data) expect(contractSend.data.status).to.be.true
  }).timeout(100000)

  it('Wallet not installed contract-send', async () => {
    (window as any).tronWeb = {}
    let Action = await new Actions();
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');
    let contractSend: any = await Action.contract.onChainCall(Contract.data, 'approves', ['TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS', '0'], {
      price: "4000000000",
      limit: "150000",
      shouldPollResponse: true,
  })

    let reults = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractSend).to.deep.equal(reults)

  }).timeout(100000)

  it('Wrong parameter contract-send', async () => {

    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions()
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');
    let contractSend: any = await Action.contract.onChainCall(Contract.data, 'approve111', ['0x0C78E2DF411F5e7AA630a90aba796e5947177683', '0'], {
      price: "4000000000",
      limit: "150000",
      shouldPollResponse: true,
  })
    let reults = new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    expect(contractSend).to.deep.equal(reults)

  }).timeout(100000)

}).timeout(100000)