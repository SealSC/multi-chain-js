import { Operational } from './extend/operational'

class Types {
  public operational: any
  constructor() {
    this.operational = new Operational()
  }
}

let TypesExtend = new Types()

export default TypesExtend
