import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getTransactionField } from '../../fieldDefinition/getTransactionField'
import { Actions } from '../index'

class GetTransaction{
  public async getTransaction(txHash:string){
    try{
      //transactionStorage.blockTransactions
      let ActionsIn = new Actions()
      let api = await ActionsIn.init();
      const TransactionInfo = await  api.data.query.transactionStorage.transactions(6521853)
      console.log(TransactionInfo)
      return new Result(PredefinedStatus.SUCCESS(TransactionInfo))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetTransaction }