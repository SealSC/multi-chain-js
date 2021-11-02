import { web3InstallisPhantom } from '../src/wrapper/web3'

describe('walletNotExist', () => {
  it('Wallet installed walletNotExist', async () => {
    try{
      (window as any).isPhantom = await web3InstallisPhantom()
    }catch(err){
      console.log('It is detected that you have not installed the Phantom wallet, so you cannot reach a certain test coverage')
    }
    
  }).timeout(100000)

  
})
