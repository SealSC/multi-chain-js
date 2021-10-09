import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('getTransactionCount', () => {
   
  it('Wallet installed getTransactionCountFunction', async ()=>{

    (window as any).solanaWeb3 = await web3Install()
    let Action = await new Actions();
    let shouldGetTransactionCount = await Action.actions.getTransactionCount();
    // const connection = new (window as any).solanaWeb3.Connection(
    //     (window as any).solanaWeb3.clusterApiUrl("testnet"),
    //     "confirmed"
    //   );
    let url = "https://api.testnet.solana.com";
      const connection = new (window as any).solanaWeb3.Connection(url);
      let getTransactionCount = await connection.getTransactionCount().then((res) => {
      });
      
    let results = new Result(PredefinedStatus.SUCCESS(getTransactionCount));
    // console.log(shouldGetTransactionCount,results,"####s")
    expect(shouldGetTransactionCount).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getTransactionCountFunction',async ()=>{

    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldGetTransactionCount = await Action.actions.getTransactionCount();
    
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetTransactionCount).to.deep.equal(results)

  }).timeout(100000)
 
})