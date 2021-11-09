describe('walletNotExist', () => {
  it('Wallet installed walletNotExist', async () => {
    try{
        let Account = await (window as any).isTronLink.defaultAddress.base58
    }catch(err){
      console.log('It is detected that you have not installed the TronLink Wallet, so you cannot reach a certain test coverage')
    }

  }).timeout(100000)


})