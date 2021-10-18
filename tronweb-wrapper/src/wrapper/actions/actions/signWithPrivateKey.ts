import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class SignWithPrivateKey {
  public async signWithPrivateKey() {
    return new Result(PredefinedStatus.NOT_SUPPORT(null))

  }
}
export { SignWithPrivateKey }