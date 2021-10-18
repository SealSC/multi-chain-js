import { web3InstallisPhantom } from '../tronweb'
import { ActionsIn } from '../actions/actions/actions'
import { Connector } from '../connector'
import PredefinedStatus from '../consts/consts'
import { Result } from '../actions/result'
import { ContractCall } from '../contractCall'
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
    (window as any).isPhantom = await web3InstallisPhantom()
    return new Result(PredefinedStatus.SUCCESS(null))
  }
}

export { Actions }
