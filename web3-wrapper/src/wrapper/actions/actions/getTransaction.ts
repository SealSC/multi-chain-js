import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { getTransactionField } from '../../fieldDefinition/getTransactionField'

class GetTransaction{
  public async getTransaction(txHash:string){
    try{
      let Transaction = await (window as any).web3.eth.getTransaction(txHash)
      let TransactionDataField = new getTransactionField()
      if(Transaction){
        TransactionDataField.hash = Transaction.hash
        TransactionDataField.nonce = Transaction.nonce
        TransactionDataField.blockHash = Transaction.blockHash
        TransactionDataField.blockNumber = Transaction.blockNumber
        TransactionDataField.transactionIndex = Transaction.transactionIndex
        TransactionDataField.from = Transaction.from
        TransactionDataField.to = Transaction.to
        TransactionDataField.value = Transaction.value
        TransactionDataField.gas = Transaction.gas
        TransactionDataField.gasPrice = Transaction.gasPrice
        TransactionDataField.input = Transaction.input
        return new Result(PredefinedStatus.SUCCESS(TransactionDataField))
      }else{
        return new Result(PredefinedStatus.ERROR_STATE(null))
      }
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetTransaction }