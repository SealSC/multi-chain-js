import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
import TronWeb from 'tronweb'
class SendTransaction {
  public async sendTransaction(transactionObject: any) {
    try {
      return (window as any).isPhantom.trx.sendTransaction(transactionObject.address, transactionObject.amount).then((receipt) => {
        return new Result(PredefinedStatus.SUCCESS(receipt))
      })
    } catch (err) {
      return new Result(PredefinedStatus.DEFAULT_STATE(err))
    }
  }
}
export { SendTransaction }