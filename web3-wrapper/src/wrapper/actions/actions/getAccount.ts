import { Result } from '../result'
import finedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(){
    if((window as any).ethereum){
      return (window as any).ethereum.selectedAddress?
      new Result(finedStatus.SUCCESS((window as any).ethereum.selectedAddress)):
      new Result(finedStatus.DEFAULT_STATE(null))
    }else{
      let accounts = await (window as any).web3.eth.getAccounts()
      if(accounts.length>0){
        return new Result(finedStatus.SUCCESS(accounts))
      }else{
        return new Result(finedStatus.DEFAULT_STATE(null))
      }
    }
  }
}
export { GetAccount }