import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class GetTransactionCount{
  public async getTransactionCount(address:string){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { GetTransactionCount }