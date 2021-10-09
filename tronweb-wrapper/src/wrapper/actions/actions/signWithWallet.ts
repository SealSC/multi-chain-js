import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
class SignWithWallet {
  public async signWithWallet(dataToSign: string) {
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SignWithWallet }