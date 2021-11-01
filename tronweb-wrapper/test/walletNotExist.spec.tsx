import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('walletNotExist', () => {
  it('Wallet installed getAccountFunction', async () => {
    try{
        let Account = await (window as any).isTronLink.defaultAddress.base58
    }catch(err){
      let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install wallet'))
      console.log(results)
    }

  }).timeout(100000)


})