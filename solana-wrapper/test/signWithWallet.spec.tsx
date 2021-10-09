import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/web3'

describe('SignWithWallet', () => {
  
  it('Wallet installed SignWithWallet', async ()=>{

    (window as any).isPhantom = await web3InstallisPhantom()
    let Action = await new Actions();
    let shouldSign = await Action.actions.signWithWallet('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
    const sign = await (window as any).solana.signMessage('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU', "utf8");
    let results = new Result(PredefinedStatus.SUCCESS(sign));
    expect(shouldSign).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed SignWithWallet',async ()=>{

    (window as any).isPhantom = {}
    let Action = await new Actions();
    let shouldGetTransactionCount = await Action.actions.signWithWallet('BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU');
    
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetTransactionCount).to.deep.equal(results)

  }).timeout(100000)
 
}).timeout(1000000)
