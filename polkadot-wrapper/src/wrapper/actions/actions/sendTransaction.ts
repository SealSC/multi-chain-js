import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'

class SendTransaction{
  public async sendTransaction(transactionObject:object){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SendTransaction }