import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

// import { getTransactionField } from '../../fieldDefinition/getTransactionField'


class GetTransaction {
  public async getTransaction(txHash: string) {
    try {
      let Transaction = await (window as any).tronWeb.trx.getTransactionInfo(txHash)
      let blockData = await (window as any).tronWeb.trx.getBlock(Transaction.blockNumber)
      let transactionData = await (window as any).tronWeb.trx.getTransaction(txHash)
      let from = await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.owner_address)
      let to = await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) ?
        await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) :
        await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.to_address)
      function getIndex() {
        if(blockData.transactions){
          for (let i = 0; i < blockData.transactions.length; i++) {
            if (Transaction.id == blockData.transactions[i].txID) {
              return i
            }else{
              
              return null
            }
          }
        }else{
          return null
        }
      }
      function getAmount() {
        let amount=0
        if(transactionData.raw_data.contract[0].parameter.type=='TransferAssetContract' ||
        !transactionData.raw_data.contract[0].parameter.value.amount){
          amount = 0
       }else {
         amount = transactionData.raw_data.contract[0].parameter.value.amount
       }
       return amount
      }
      let input= transactionData.raw_data.contract[0].parameter.value. data
      if (Transaction) {

        let data = {
          "hash": Transaction.id,
          "nonce": null,
          "blockHash": blockData.blockID,
          "blockNumber": Transaction.blockNumber,
          "transactionIndex": getIndex(),
          "from": from,
          "to": to,
          "value": getAmount(),
          "gas": null,
          "gasPrice": null,
          "input": input
        }

        return new Result(PredefinedStatus.SUCCESS(data))
      } else {
        return new Result(PredefinedStatus.ERROR_STATE(null))
      }
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetTransaction }