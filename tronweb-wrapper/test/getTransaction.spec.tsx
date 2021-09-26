import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'
// import { getTransactionField } from '../src/wrapper/fieldDefinition/getTransactionField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getTransaction', () => {
   
  it('Wallet installed getTransactionFunction', async ()=>{

    (window as any).isPhantom = await web3InstallisPhantom()
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa');
    let Transaction = await (window as any).isPhantom.trx.getTransactionInfo('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa')
    let blockData = await (window as any).isPhantom.trx.getBlock(Transaction.blockNumber)
    let transactionData = await (window as any).isPhantom.trx.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa')
    let from = await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.owner_address)
    let to = await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) ?
      await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) :
      await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.to_address)
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
      let results = new Result(PredefinedStatus.SUCCESS(data));
      expect(JSON.stringify(shouldGetTransaction)).to.deep.equal(JSON.stringify(results))
    } else {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    

  }).timeout(100000)
  it('Wallet wrong installed getTransactionFunction', async ()=>{
    (window as any).isPhantom = await web3InstallisPhantom()
    let Action =  new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('a36cd70bff2992836ce0d2c8de086b4794b410a7cdae4eb814bbc280a2c53a60');
    let Transaction = await (window as any).isPhantom.trx.getTransactionInfo('a36cd70bff2992836ce0d2c8de086b4794b410a7cdae4eb814bbc280a2c53a60')
    let blockData = await (window as any).isPhantom.trx.getBlock(Transaction.blockNumber)
    let transactionData = await (window as any).isPhantom.trx.getTransaction('a36cd70bff2992836ce0d2c8de086b4794b410a7cdae4eb814bbc280a2c53a60')
    let from = await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.owner_address)
    let to = await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) ?
      await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.contract_address) :
      await (window as any).isPhantom.address.fromHex(transactionData.raw_data.contract[0].parameter.value.to_address)
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
      let results = new Result(PredefinedStatus.SUCCESS(data));
      expect(JSON.stringify(shouldGetTransaction)).to.deep.equal(JSON.stringify(results))
    } else {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    

  }).timeout(100000)


  it('Wallet wrongs installed getTransactionFunction', async ()=>{

    (window as any).isPhantom = await web3InstallisPhantom()
    let Action =  new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('ae4eb814bbc280a2c53a60');
    
      let results =  new Result(PredefinedStatus.ERROR_STATE(null))
      expect(JSON.stringify(shouldGetTransaction)).to.deep.equal(JSON.stringify(results))
  }).timeout(100000)



  it('Wallet not installed getTransactionFunction',async ()=>{
    //(window as any).isPhantom = {}
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d90e9531bf49a3fa');
    
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetTransaction).to.deep.equal(results)

  }).timeout(100000) 

})
