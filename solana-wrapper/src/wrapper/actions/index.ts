import { web3Install } from '../web3'
import { ActionsIn } from './actions/actions'
import { Connector } from '../connector'
import PredefinedStatus from '../consts/consts'
import { Result } from './result'

class Actions {
  public actions: ActionsIn
  public connector: Connector
  constructor() {
    this.actions = new ActionsIn()
    this.connector = new Connector()
  }
}

export { Actions }
