import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'
import TronWeb from 'tronweb'
describe('signTransactionPrivateKey', () => {

  it('Wallet installed signTransactionPrivateKey', async () => {
    (window as any).isTronLink = await web3InstallisPhantom()
    let Action = new Actions();
    let shouldSigntranction = await Action.actions.signTransaction({
      to: "TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
      amount: 10,
      from: "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      options: 1
    }, 'd77c1a913b959d8898f3db2478904e3707395f7d4fde0dc01800d21556e2ceb1');
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
    expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed signTransactionPrivateKey', async () => {
    (window as any).isTronLink = {}
    let Action = await new Actions();
    let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
      to: "TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
      amount: 10,
      from: "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      options: 1
    }, 'd77c1a913b959d8898f3db2478904e3707395f7d4fde0dc01800d21556e2ceb1');
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
    expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)

})
