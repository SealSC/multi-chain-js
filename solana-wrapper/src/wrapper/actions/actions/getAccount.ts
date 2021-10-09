import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
import { getAccountInterface } from '../classInterface'
class GetAccount {
  public async getAccount() {
    try {
      await (window as any).isPhantom.off().connect()
      let account = (window as any).isPhantom.publicKey.toBase58()
      return new Result(PredefinedStatus.SUCCESS([account]))
    } catch (error) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetAccount }