import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Keyring } from '@polkadot/api';
import { stringToU8a , u8aToHex } from '@polkadot/util' 

class SignWithPrivateKey{
  public async signWithPrivateKey(data:string|string,privateKey:string){
    try{
      const keyring = new Keyring({ type: 'sr25519' });
      const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });
      const message = stringToU8a(data);
      const signature = alice.sign(message);
      console.log(`${u8aToHex(signature)}`)
      return new Result(PredefinedStatus.SUCCESS(`${u8aToHex(signature)}`))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignWithPrivateKey }