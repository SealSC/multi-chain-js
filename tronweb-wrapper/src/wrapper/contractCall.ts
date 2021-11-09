
import { Result } from "../wrapper/actions/result"
import PredefinedStatus from "../wrapper/consts/consts"
import { GasSetting, transactionResultGetter } from "../wrapper/utils"

function getContractMethod(contract: any, methodName: string, param: any) {
  let method = contract ? contract.methods[methodName] : null
  if (!method) return null
  let prop = method(...param)._method
  return {
    prop: prop,
    func: method
  }
}
class ContractCall {
  public async loadContract(abiJson: any, contractAddress: string) {
    try {
      let Contract: any = await (window as any).isTronLink.contract(abiJson, contractAddress)
      return new Result(PredefinedStatus.SUCCESS(Contract))
    } catch (err) {
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
  public async offChainCall(contract: any, methodName: string, param: [], amount, extra) {
    let method = getContractMethod(contract, methodName, param)
    if (!method) {
      return new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    }
    return await new Promise(async res => {
      method!.func(...param).call((err, result) => {
        transactionResultGetter(res, result, err)

      }).catch(reason => {
        transactionResultGetter(res, reason, null)
      })
    })
  }
  public async onChainCall(contract: any, methodName: string, param: any, extra: any) {
    let method = getContractMethod(contract, methodName, param)
    if (!method) {
      return new Result(PredefinedStatus.ERROR_STATE("参数有误"))
    }
    let gasSetting = GasSetting(extra)
    let sendParam = {
      feeLimit: gasSetting.gasLimit,
      callValue: gasSetting.gasPrice,
      shouldPollResponse: gasSetting.shouldPollResponse,
    }
    return await new Promise(res => {
      method!.func(...param).send(sendParam, (err, tx) => {
      }).then(receipt => {
        transactionResultGetter(res, receipt, null)
      }).catch(reason => {
        transactionResultGetter(res, reason, null)
      });
    });
  }
}
export { ContractCall };

