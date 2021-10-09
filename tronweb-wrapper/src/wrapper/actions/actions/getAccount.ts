import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(){
    try{
      //console.log(await (window as any).tronWeb.defaultAddress.base58,"??")
        let accounts = await (window as any).isPhantom.defaultAddress.base58
        let data=[accounts]

        return new Result(PredefinedStatus.SUCCESS(data))

    }catch(err){
      //console.log(111)
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { GetAccount }