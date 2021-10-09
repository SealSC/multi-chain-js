import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(){
   try{
      let accounts = await (window as any).web3.eth.getAccounts()
      return new Result(PredefinedStatus.SUCCESS(accounts))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetAccount }