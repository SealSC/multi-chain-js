import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('SignWithPrivateKey', () => {
  
  it('Wallet installed SignWithPrivateKey', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions();
    let shouldSign = await Action.actions.signWithPrivateKey('3','4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
    let sign = await (window as any).web3.eth.accounts.sign("3",'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
    let results = new Result(PredefinedStatus.SUCCESS(sign));
    expect(shouldSign).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed SignWithPrivateKey',async ()=>{

    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldGetTransactionCount = await Action.actions.signWithPrivateKey('2','4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetTransactionCount).to.deep.equal(results)

  }).timeout(100000)

}).timeout(1000000)
