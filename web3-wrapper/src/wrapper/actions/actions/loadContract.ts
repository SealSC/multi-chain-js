import { Result } from '../result'
import finedStatus  from '../../consts/consts'

class LoadContract{
  public async loadContract(abi:any,address:string){
    try{
      let Contract: any = await new (window as any).web3.eth.Contract(abi,address)
      return new Result(finedStatus.SUCCESS(Contract))
    }catch(err){
      return new Result(finedStatus.DEFAULT_STATE(err))
    }
    
  }
}
export { LoadContract }