
import { Result } from '../wrapper/actions/result'
import PredefinedStatus from '../wrapper/consts/consts'

class Connector {
  public link() {
    try {
      let accounts = (window as any).isTronLink.defaultAddress.base58
      let data = [accounts]
      return new Result(PredefinedStatus.SUCCESS(data))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    }
  }
}
export { Connector }

