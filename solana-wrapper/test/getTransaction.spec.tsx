import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('getTransaction', () => {

  it('Wallet installed getTransactionFunction', async () => {
    try{
      (window as any).solanaWeb3 = await web3Install()
      let Action = await new Actions();
      let shouldGetTransaction = await Action.actions.getTransaction('5CgLYCuDbLZQnraR8jrSYQGetwyYLNGcnckgw3ukbuSeujCwDp1wW7XULMqoQEd5eYNyeoGMV56WvjrZVmKVQbT');
      const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("testnet"),
        "confirmed"
      );
      let Transaction = await connection.getTransaction('5CgLYCuDbLZQnraR8jrSYQGetwyYLNGcnckgw3ukbuSeujCwDp1wW7XULMqoQEd5eYNyeoGMV56WvjrZVmKVQbT').then((res) => {
        return res
      });
      let results = new Result(PredefinedStatus.SUCCESS(Transaction));
      expect(shouldGetTransaction).to.deep.equal(results)
    }catch(err){
      let Action = await new Actions();
      let shouldGetTransaction = await Action.actions.getTransaction('0x65d3cada398bfcd70098ed955ff645b072c6df0d001f61f4b1c181cfdf7d1309');
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
      expect(shouldGetTransaction).to.deep.equal(results)
    }
    
  }).timeout(100000)

  it('Wallet not installed getTransactionFunction', async () => {
    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldGetTransaction = await Action.actions.getTransaction('0x65d3cada398bfcd70098ed955ff645b072c6df0d001f61f4b1c181cfdf7d1309');
    let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'));
    expect(shouldGetTransaction).to.deep.equal(results)
  }).timeout(100000)
})
