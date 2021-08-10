import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class LoadContract{
  public async loadContract(abi:any,address:string){
    try{
      let Contract: any = await new (window as any).web3.eth.Contract(abi,address)
      return new Result(PredefinedStatus.SUCCESS(Contract))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { LoadContract }