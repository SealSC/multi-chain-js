import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(){
    if((window as any).ethereum){
      return (window as any).ethereum.selectedAddress?
      new Result(PredefinedStatus.SUCCESS((window as any).ethereum.selectedAddress)):
      new Result(PredefinedStatus.DEFAULT_STATE(null))
    }else{
      let accounts = await (window as any).web3.eth.getAccounts()
      if(accounts.length>0){
        return new Result(PredefinedStatus.SUCCESS(accounts))
      }else{
        return new Result(PredefinedStatus.DEFAULT_STATE(null))
      }
    }
  }
}
export { GetAccount }