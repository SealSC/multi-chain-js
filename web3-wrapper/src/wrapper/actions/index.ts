import  { ActionsIn }  from '../actions/actions/actions'
class Actions {
  public actions:object
  constructor() {
    this.actions=new ActionsIn()
  }
}

let ActionsExtend = new Actions()

export default ActionsExtend
