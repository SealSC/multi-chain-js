import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
import { getAccountInterface } from '../classInterface'
class GetAccount {
  public async getAccount() {
    try {
      let accounts = await (window as any).isPhantom.defaultAddress.base58
      let data = [accounts]
      return new Result(PredefinedStatus.SUCCESS(data))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetAccount }