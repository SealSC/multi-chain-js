import { ActionsIn }  from '../actions/actions/actions'
import { Connector } from '../connector'
import PredefinedStatus  from '../consts/consts'
import { Result } from '../actions/result'
import { ContractCall } from '../contractCall'
import {ApiPromise, WsProvider} from '@polkadot/api'

class Actions {
  public actions:ActionsIn
  public connector:Connector
  public contract:ContractCall
  constructor() {
    this.actions = new ActionsIn()
    this.connector = new Connector()
    this.contract = new ContractCall()
  }
  public async init(rpc:string){
    const wsProvider = new WsProvider(rpc);
    (window as any).api = await ApiPromise.create({ provider: wsProvider });
    return new Result(PredefinedStatus.SUCCESS((window as any).api))
  }
}

export { Actions }
