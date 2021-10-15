import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
let TronWeb = require("tronweb")
class SendSignedTransaction {
  public async sendSignedTransaction(to, amount, from, options, privateKey: string) {
    try {
      const tradeobj = await (window as any).isPhantom.transactionBuilder.sendTrx(to,
        amount,
        from,
        options
      );
      const signedtxn = await (window as any).isPhantom.trx.sign(tradeobj, privateKey);
      let signTransaction: any = await (window as any).isPhantom.trx.sendRawTransaction(signedtxn);
      return new Result(PredefinedStatus.SUCCESS(signTransaction))
    } catch (err) {
      return new Result(PredefinedStatus.NOT_SUPPORT(null));
    }
  }
}
export { SendSignedTransaction }