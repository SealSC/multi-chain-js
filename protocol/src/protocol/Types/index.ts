import { Operational } from './extend/operational'
import { Connector } from './extend/connector'
import { ContractCall } from './extend/contractCall'

class Types {
  public operational: any
  public Connector: any
  public contract:any
  constructor() {
    this.operational = new Operational()
    this.Connector = new Connector()
    this.contract = new ContractCall()
  }
}

let TypesExtend = new Types()

export default TypesExtend
