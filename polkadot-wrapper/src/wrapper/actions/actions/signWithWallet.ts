import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { web3Accounts, web3Enable ,web3FromSource } from '@polkadot/extension-dapp';
import {stringToHex } from '@polkadot/util'

class SignWithWallet{
  public async signWithWallet(dataToSign:any|string){
    try{
      const allAccounts = await web3Accounts();
      const account = allAccounts[0];
      const injector = await web3FromSource(account.meta.source);
      const signRaw = injector.signer.signRaw;
      const address = account.address
      if (!!signRaw) {
        const { signature } = await signRaw({
          address,
          data: stringToHex(dataToSign),
          type: 'bytes'
        });
        return new Result(PredefinedStatus.SUCCESS(signature))
      }else{
        return new Result(PredefinedStatus.ERROR_STATE(null))
      }
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SignWithWallet }