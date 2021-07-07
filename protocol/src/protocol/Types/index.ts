import { Operational } from './extend/operational'
import { Connector } from './extend/connector'

class Types {
  public operational: any
  public Connector: any
  constructor() {
    this.operational = new Operational()
    this.Connector = new Connector()
  }
}

let TypesExtend = new Types()

export default TypesExtend
