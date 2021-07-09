import  { ActionsIn }  from '../actions/actions/actions'
import { Connector } from '../connector'
class Actions {
  public actions:object
  public connector:object
  constructor() {
    this.actions=new ActionsIn()
    this.connector=new Connector()
  }
}

let ActionsExtend = new Actions()

export default ActionsExtend
