import { Operational } from './extend/operational'
import { Connector } from './extend/connector'
import { ContractCall } from './extend/contractCall'

class Types {
  public actions: Operational
  public Connector: Connector
  public contract: ContractCall
  constructor() {
    this.actions = new Operational()
    this.Connector = new Connector()
    this.contract = new ContractCall()
  }
}

let TypesExtend = new Types()

export default TypesExtend
