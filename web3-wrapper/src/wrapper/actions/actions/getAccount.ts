import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(){
    try{
      if((window as any).ethereum){
        let accounts = await (window as any).web3.eth.getAccounts()
        return new Result(PredefinedStatus.SUCCESS(accounts))
      }else{
        return new Result(PredefinedStatus.DEFAULT_STATE(null))
      }
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetAccount }