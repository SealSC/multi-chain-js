import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
// import { getTransactionField } from '../src/wrapper/fieldDefinition/getTransactionField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getTransaction', () => {
   
  it('Wallet installed getTransactionFunction', async ()=>{

    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa');
    let Transaction = await (window as any).tronWeb.trx.getTransactionInfo('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa')
    let blockData = await (window as any).tronWeb.trx.getBlock(Transaction.blockNumber)
    let transactionData = await (window as any).tronWeb.trx.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa')
    let from = await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.owner_address)
    let to = await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) ?
      await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) :
      await (window as any).tronWeb.address.fromHex(transactionData.raw_data.contract[0].parameter.value.to_address)
    function getIndex() {
      for (let i = 0; i < blockData.transactions.length; i++) {
        if (Transaction.id == blockData.transactions[i].txID) {
          return i
        }
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
        "value": getAmount,
        "gas": null,
        "gasPrice": null,
        "input": input
      }
      let results = new Result(PredefinedStatus.SUCCESS(data));
      // console.log(JSON.stringify(shouldGetTransaction),JSON.stringify(results))
      expect(JSON.stringify(shouldGetTransaction)).to.deep.equal(JSON.stringify(results))
    } else {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    

  }).timeout(100000)

  it('Wallet not installed getTransactionFunction',async ()=>{
    // (window as any).tronWeb = {}
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d90e9531bf49a3fa');
    
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetTransaction).to.deep.equal(results)

  }).timeout(100000) 

})
