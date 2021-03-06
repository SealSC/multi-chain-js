import { Result } from './actions/result'
import PredefinedStatus from './consts/consts'

class Connector {
  public async link() {
      try {
        await (window as any).isPhantom.off().connect()
        let account = (window as any).isPhantom.off().publicKey
        return new Result(PredefinedStatus.SUCCESS(account))
      } catch (error) {
        return new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
      }
  }
}
export { Connector }