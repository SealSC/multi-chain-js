import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'
import TronWeb from 'tronweb'
describe('signTransactionPrivateKey', () => {
  
  it('Wallet installed signTransactionPrivateKey', async ()=>{
    (window as any).tronWeb = await tronWebInstall()
    let Action =  new Actions();
    let shouldSigntranction = await Action.actions.signTransaction({
      from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
    },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');

    let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
    expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed signTransactionPrivateKey',async ()=>{
    // (window as any).tronWeb = {}
     let  HttpProvider = TronWeb.providers.HttpProvider;
     let tronwebww=null as any
    if(HttpProvider){
      const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
      const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
      const eventServer = "https://api.shasta.trongrid.io";
      const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
      tronwebww = tronWeb;
    }
    let Action = await new Actions();
    let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
      to:"TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF",
      amount:10,
      from:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      options:1
    },'d77c1a913b959d8898f3db2478904e3707395f7d4fde0dc01800d21556e2ceb1');
    const tradeobj = await tronwebww.transactionBuilder.sendTrx("TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF", 10,"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb");  
    let signTransaction = await tronwebww.trx.sign(tradeobj, "d77c1a913b959d8898f3db2478904e3707395f7d4fde0dc01800d21556e2ceb1"); 
    let results = new Result(PredefinedStatus.SUCCESS(null));
    expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)

})
