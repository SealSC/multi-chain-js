import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getTransactionField } from '../../fieldDefinition/getTransactionField'
import { Actions } from '../index'

class GetTransaction{
  public async getTransaction(txHash:string){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { GetTransaction }