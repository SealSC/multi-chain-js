import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class walletNotExist {
  public async walletNotExist() {
    try {
      await (window as any).isPhantom.off().connect()
      let account = await (window as any).isTronLink.defaultAddress.base58
      return new Result(PredefinedStatus.SUCCESS([account]))
    } catch (error) {
      return new Result(PredefinedStatus.ERROR_STATE('null'))
    }
  }
}
export { walletNotExist } 