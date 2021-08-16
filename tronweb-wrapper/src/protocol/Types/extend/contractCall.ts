import { Result } from '../result'
import finedStatus  from '../../Consts/consts'
import { onChainCallInterface ,offChainCallInterface } from './interface'

interface ContractCallInterface{
  offChainCall():offChainCallInterface
  onChainCall():onChainCallInterface
}

class ContractCall implements ContractCallInterface{
  public offChainCall() {
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public onChainCall() {
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
}

export { ContractCall }