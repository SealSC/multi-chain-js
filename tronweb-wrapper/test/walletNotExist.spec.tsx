import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('walletNotExist', () => {
  it('Wallet installed getAccountFunction', async () => {
    try{
        let Account = await (window as any).isTronLink.defaultAddress.base58
    }catch(err){
      console.log('It is detected that you have not installed the TronLink Wallet, so you cannot reach a certain test coverage')
    }

  }).timeout(100000)


})