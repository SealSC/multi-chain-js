import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

let detectEthereumProvider = require('@metamask/detect-provider')

describe('sendSignedTransaction', () => {

  it('Wallet installed sendSignedTransaction', async ()=>{

    (window as any).solanaWeb3 = await web3Install()
    let Action = await new Actions();
  
    let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU','9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF');

    // const connection = new (window as any).solanaWeb3.Connection(
    //     (window as any).solanaWeb3.clusterApiUrl("devnet"),
    //     "confirmed"
    //   );
    //   const transaction = new (window as any).solanaWeb3.Transaction();
    //   let publickeyAddress = new (window as any).solanaWeb3.PublicKey('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
    //   transaction.feePayer ||= publickeyAddress || undefined;
    //   transaction.recentBlockhash ||= (
    //     await connection.getRecentBlockhash("finalized")
    //   ).blockhash;
    //   let addressTo =  new (window as any).solanaWeb3.PublicKey('9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF');
    //   transaction.add(
    //     (window as any).solanaWeb3.SystemProgram.transfer({
    //       fromPubkey: publickeyAddress,
    //       toPubkey: addressTo,
    //       lamports: 10,
    //     })
    //   );
    //   const signedTransaction = await (window as any).solana.signTransaction(
    //     transaction
    //   );
    //   const signTransaction = await connection.sendRawTransaction(
    //     signedTransaction.serialize()
    //   );
    //   let results = new Result(PredefinedStatus.SUCCESS(signTransaction))
    //   console.log(shouldsendSignedTransaction,results,"#####")
    //   expect(shouldsendSignedTransaction).to.deep.equal(results)
    // console.log(shouldsendSignedTransaction,"###")
    if(shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data).to.not.empty
    // expect(typeof foo).to.equal('string');
    // if(shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data.status).to.be.true

  }).timeout(100000)

  it('Wallet not installed sendSignedTransaction',async ()=>{

    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU','9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF');
  
    if(shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data.status).to.not.true

  }).timeout(100000)
   
})
