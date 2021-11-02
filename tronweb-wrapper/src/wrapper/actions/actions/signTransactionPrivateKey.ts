
import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class SignTransactionPrivateKey {
  public async signTransactionPrivateKey(dataToSign: any, privateKey: string) {
    try {
      const tradeobj = await (window as any).isTronLink.transactionBuilder.sendTrx(dataToSign.to, dataToSign.amount, dataToSign.from, dataToSign.options);
      let signTransaction = await (window as any).isTronLink.trx.sign(tradeobj, privateKey);
      return new Result(PredefinedStatus.SUCCESS(null))
    } catch (err) {
      return new Result(PredefinedStatus.NOT_SUPPORT(null))
    }
  }
}
export { SignTransactionPrivateKey }