
import { ActionsIn } from './actions/actions'
import { Connector } from '../connector'
import { ContractCall } from '../contractCall'
import PredefinedStatus from '../consts/consts'
import { Result } from './result'
import { web3InstallisPhantom } from '../web3'
import { web3Install } from '../web3'
class Actions {
  public actions: ActionsIn
  public connector: Connector
  public contract: ContractCall
  constructor() {
    this.actions = new ActionsIn()
    this.connector = new Connector()
    this.contract = new ContractCall()
  }
  public async init() {
    (window as any).solanaWeb3 = await web3Install();
    (window as any).isPhantom = await web3InstallisPhantom()
    return new Result(PredefinedStatus.SUCCESS(null))
  }
}


export { Actions }
