import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getTransactionField } from '../../fieldDefinition/getTransactionField'

class GetTransaction{
  public async getTransaction(txHash:string){
    try{
      //transactionStorage.blockTransactions
      const TransactionInfo = await ( window as any ).api.query.transactionStorage.transactions(6521853)
      console.log(TransactionInfo)
      return new Result(PredefinedStatus.SUCCESS(TransactionInfo))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetTransaction }