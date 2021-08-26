import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { Actions } from '../index'

class SendTransaction{
  public async sendTransaction(transactionObject:object){
    try{
      let ActionsIn = new Actions()
      let api = await ActionsIn.init();
      const utx =  api.data.tx.claims.claim();
      api.data.tx.send(({ status }) => {
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