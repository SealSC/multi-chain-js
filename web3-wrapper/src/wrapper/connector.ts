import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'

class Connector {
  public link(){
    if((window as any).ethereum){
      if((window as any).ethereum.enable){
        let account = (window as any).ethereum.selectedAddress
        if(!account){
          (window as any).ethereum.enable()
          return new Result(PredefinedStatus.DEFAULT_STATE(null))
        }else{
          return new Result(PredefinedStatus.SUCCESS('已连接'))
        }
      }
    }else{
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    }
  }
}
export { Connector }