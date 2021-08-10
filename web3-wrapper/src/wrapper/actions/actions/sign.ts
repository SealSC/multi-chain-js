import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class Sign{
  public async sign(dataToSign:object|string,address:string){
    try{
      let dataSign = await (window as any).web3.utils.utf8ToHex(dataToSign)
      let sign = await (window as any).web3.eth.sign(dataSign,address)
      return new Result(PredefinedStatus.SUCCESS(sign))
    }catch(err){
      return new Result(PredefinedStatus.DEFAULT_STATE(err))
    }
    
  }
}
export { Sign }