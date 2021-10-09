import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
import { getTransactionField } from '../src/wrapper/fieldDefinition/getTransactionField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getTransaction', () => {
   
  it('Wallet installed getTransactionFunction', async ()=>{

    (window as any).solanaWeb3 = await web3Install()
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('5CgLYCuDbLZQnraR8jrSYQGetwyYLNGcnckgw3ukbuSeujCwDp1wW7XULMqoQEd5eYNyeoGMV56WvjrZVmKVQbT');
    const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("testnet"),
        "confirmed"
      );
    // let url = "https://api.testnet.solana.com";
    //   const connection = new (window as any).solanaWeb3.Connection(url);
      let Transaction =await connection.getTransaction('5CgLYCuDbLZQnraR8jrSYQGetwyYLNGcnckgw3ukbuSeujCwDp1wW7XULMqoQEd5eYNyeoGMV56WvjrZVmKVQbT').then((res) => {
          return res
        });
    // let TransactionDataField = new getTransactionField()
    // if(Transaction){
    //   TransactionDataField.hash = Transaction.hash
    //   TransactionDataField.nonce = Transaction.nonce
    //   TransactionDataField.blockHash = Transaction.blockHash
    //   TransactionDataField.blockNumber = Transaction.blockNumber
    //   TransactionDataField.transactionIndex = Transaction.transactionIndex
    //   TransactionDataField.from = Transaction.from
    //   TransactionDataField.to = Transaction.to
    //   TransactionDataField.value = Transaction.value
    //   TransactionDataField.gas = Transaction.gas
    //   TransactionDataField.gasPrice = Transaction.gasPrice
    //   TransactionDataField.input = Transaction.input
    // }
    // console.log(Transaction,shouldGetTransaction,"###")
    let results = new Result(PredefinedStatus.SUCCESS(Transaction));
    expect(shouldGetTransaction).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getTransactionFunction',async ()=>{
    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('0x65d3cada398bfcd70098ed955ff645b072c6df0d001f61f4b1c181cfdf7d1309');
    
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetTransaction).to.deep.equal(results)

  }).timeout(100000) 

})
