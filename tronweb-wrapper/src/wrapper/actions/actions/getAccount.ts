import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class GetAccount {
  public async getAccount() {
    try {
      let accounts = await (window as any).isTronLink.defaultAddress.base58
      let data = [accounts]
      return new Result(PredefinedStatus.SUCCESS(data))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetAccount }