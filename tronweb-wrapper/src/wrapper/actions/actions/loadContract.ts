import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
class LoadContract{
  public async loadContract(abiJson:any,contractAddress:string){
    try{
      let Contract: any = await (window as any).isTronLink.contract(abiJson,contractAddress)
      return new Result(PredefinedStatus.SUCCESS(Contract))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { LoadContract }