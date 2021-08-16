import { Result } from '../result'
import finedStatus  from '../../Consts/consts'

interface ConnectorInterface{
  link(param:any):object
  unlink(): object 
}

class Connector implements ConnectorInterface{
  public link(param:any){
    return new Result(finedStatus.NOT_SUPPORT(null))
  }
  public unlink(){
    return new Result(finedStatus.NOT_SUPPORT(null))
  }
}

export { Connector }