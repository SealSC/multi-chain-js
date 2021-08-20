import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class SignWithPrivateKey {
  public async signWithPrivateKey(dataToSign:any, privateKey: string) {
    try {
      const tradeobj = await (window as any).tronWeb.transactionBuilder.sendTrx(dataToSign.from, dataToSign.amount,dataToSign.to  );
      const signedtxn = await (window as any).tronWeb.trx.sign(tradeobj, privateKey);
      let data = {
        signature:signedtxn.transaction.signature[0]
      }
      return new Result(PredefinedStatus.SUCCESS(data))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignWithPrivateKey }