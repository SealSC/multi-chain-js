import { web3Install } from '../../wrapper/web3'
import { ActionsIn }  from '../actions/actions/actions'
import { Connector } from '../connector'
import PredefinedStatus  from '../consts/consts'
import { Result } from '../actions/result'
import { ContractCall } from '../contractCall'

class Actions {
  public actions:ActionsIn
  public connector:Connector
  public contract:ContractCall
  constructor() {
    this.actions = new ActionsIn()
    this.connector = new Connector()
    this.contract = new ContractCall()
  }
  public async init(){
    (window as any).web3 = await web3Install()
    return new Result(PredefinedStatus.SUCCESS(null))
  }
}

export { Actions }
