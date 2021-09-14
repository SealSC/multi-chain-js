
import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'

class Connector {
  public link(){
    if((window as any).tronWeb){
      if((window as any).tronWeb.trx){
        let account =  (window as any).tronWeb.defaultAddress.base58
        // if(!account){
        //   return (window as any).ethereum.enable().then((account)=>{
        //     return new Result(PredefinedStatus.SUCCESS(account[0]))
        //   })
        // }else{
          return new Result(PredefinedStatus.SUCCESS(account))
        // }
      }else{
        return new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
      }
    }else{
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    }
  }
}
export { Connector }

