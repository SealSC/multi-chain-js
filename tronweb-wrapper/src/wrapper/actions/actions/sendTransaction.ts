import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class SendTransaction {
  public async sendTransaction(transactionObject: any) {
    try {
      return (window as any).isTronLink.trx.sendTransaction(transactionObject.address, transactionObject.amount).then((receipt) => {
        return new Result(PredefinedStatus.SUCCESS(receipt))
      })
    } catch (err) {
      return new Result(PredefinedStatus.DEFAULT_STATE(err))
    }
  }
}
export { SendTransaction }