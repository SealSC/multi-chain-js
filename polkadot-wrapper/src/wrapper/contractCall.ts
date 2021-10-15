import { Result } from '../wrapper/actions/result'
import PredefinedStatus from '../wrapper/consts/consts'

class ContractCall {
  public async loadContract(abi: any, address: string) {
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
  public async offChainCall(contract: any, methodName: string, param: [], amount, extra) {
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }

  public async onChainCall(contract: any, methodName: string, param: any, extra: any) {
    return new Result(PredefinedStatus.NOT_SUPPORT(null))
  }
}
export { ContractCall }