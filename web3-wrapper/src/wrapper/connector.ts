import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'

class Connector {
  public link(){
    if((window as any).ethereum){
      if((window as any).ethereum.enable){
        
        let account = (window as any).ethereum.selectedAddress
        if(!account){
          return (window as any).ethereum.enable().then((account)=>{
            return new Result(PredefinedStatus.SUCCESS(account[0]))
          })
        }else{
          return new Result(PredefinedStatus.SUCCESS(account))
        }
      }
    }else{
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    }
  }
}
export { Connector }