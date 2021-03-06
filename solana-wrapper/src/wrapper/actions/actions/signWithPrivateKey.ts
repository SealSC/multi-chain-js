import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'

class SignWithPrivateKey {
  public async signWithPrivateKey(data: string | string, privateKey: string) {
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SignWithPrivateKey }