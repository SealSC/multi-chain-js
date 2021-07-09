import wallet from '../../wrapper/web3'
import { ActionsIn }  from '../actions/actions/actions'
import { Connector } from '../connector'
import finedStatus  from '../consts/consts'
import { Result } from '../actions/result'

class Actions {
  public actions:object
  public connector:object
  constructor() {
    this.actions=new ActionsIn()
    this.connector=new Connector()
  }
  public async init(){
    (window as any).web3 = await wallet.web3web3Install()
    return new Result(finedStatus.SUCCESS(null))
  }
}

let ActionsExtend = new Actions()

export default ActionsExtend
