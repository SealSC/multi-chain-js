import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Keyring } from '@polkadot/api';
import { stringToU8a , u8aToHex } from '@polkadot/util' 

class SignWithPrivateKey{
  public async signWithPrivateKey(data:string|string,privateKey:string){
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { SignWithPrivateKey }