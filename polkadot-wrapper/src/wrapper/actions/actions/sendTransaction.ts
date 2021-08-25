import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'

class SendTransaction{
  public async sendTransaction(transactionObject:object){
    try{
      const utx = (window as any).api.tx.claims.claim();
      (window as any).api.tx.send(({ status }) => {
        if (status.isInBlock) {
          return new Result(PredefinedStatus.SUCCESS(`${status.asInBlock}`))
        }
      });
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SendTransaction }