import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'

const defaultGas={
  price:'4000000000',
  limit:'150000'
}
function GasSetting(setting):any{
  setting.gasPrice = setting.gasPrice ? setting.gasPrice : defaultGas.price
  setting.gasLimit = setting.gasLimit ? setting.gasLimit : defaultGas.limit
  return setting
}

let transactionResultGetter = function (resolve, err, data) {
  let result
  if(err) {
    result = new Result(PredefinedStatus.ERROR_STATE(null))
  } else {
    result = new Result(PredefinedStatus.SUCCESS(data))
  }
  resolve(result)
}

export {
  GasSetting,
  transactionResultGetter
}