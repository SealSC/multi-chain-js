import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(address:string){
    // try{

        let accounts = await (window as any).tronWeb.trx.getAccount(address)
        let data=[accounts.address]
        console.log(accounts.address,"PP")
        return new Result(PredefinedStatus.SUCCESS(data))

    // }catch(err){
    //   return new Result(PredefinedStatus.ERROR_STATE(null))
    // }
  }
}
export { GetAccount }