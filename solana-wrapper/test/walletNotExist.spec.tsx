import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/web3'

describe('walletNotExist', () => {
  it('Wallet installed getAccountFunction', async () => {
    try{
      (window as any).isPhantom = await web3InstallisPhantom()
    }catch(err){
      console.log('It is detected that you have not installed the Phantom wallet, so you cannot reach a certain test coverage')
    }
    
  }).timeout(100000)

  
})
