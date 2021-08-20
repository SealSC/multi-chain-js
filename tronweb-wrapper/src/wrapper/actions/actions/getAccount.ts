import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(address:string){
    try{
      if((window as any).ethereum){
        let accounts = await (window as any).tronWeb.trx.getAccount(address)
        let data=[accounts.address]
        return new Result(PredefinedStatus.SUCCESS(data))
      }else{
        return new Result(PredefinedStatus.DEFAULT_STATE(null))
      }
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
    // return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { GetAccount }