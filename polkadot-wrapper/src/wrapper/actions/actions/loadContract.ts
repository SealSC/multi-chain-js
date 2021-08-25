import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class LoadContract{
  public async loadContract(abi:any,address:string){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { LoadContract }