import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

let detectEthereumProvider = require('@metamask/detect-provider')

describe('sendSignedTransaction', () => {

  it('Wallet installed sendSignedTransaction', async ()=>{

    (window as any).isPhantom = await web3InstallisPhantom()
    let Action = await new Actions();
  
    let shouldsendSignedTransaction:any = await Action.actions.sendSignedTransaction(
      "TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
      10,
      "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      1
    ,'d77c1a913b959d8898f3db2478904e3707395f7d4fde0dc01800d21556e2ceb1');
    if(shouldsendSignedTransaction.result) expect(shouldsendSignedTransaction.data.status).to.be.true

  }).timeout(100000)

  it('Wallet not installed sendSignedTransaction',async ()=>{

    (window as any).isPhantom = {}
    
    let Action = await new Actions();
    
    let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction(
      "TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
      10,
      "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      1
    ,'d77c1a913b959d8898f3db2478904e3707395f7d4fde0dc01800d21556e2ceb1');
  
    if(shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data.status).to.not.true

  }).timeout(100000)
   
})