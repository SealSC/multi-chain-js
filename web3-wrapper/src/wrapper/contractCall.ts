import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'
import { GasSetting , transactionResultGetter } from '../wrapper/utils' 

function getContractMethod(contract:any,methodName:string,param:any){
  console.log(methodName)
  let method = contract.methods[methodName]
  if(!method) return null
  let prop = method(...param)._method
  return {
    prop:prop,
    func:method
  }
}

class ContractCall {
  public async offChainCall(contract:any,methodName:string,param:[],amount,extra){
    let account = await (window as any).web3.eth.getAccounts()
    let method = getContractMethod(contract,methodName,param)
    if(!method){
      return new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    }
    return await new Promise(async res=>{
      method!.func(...param).call({from:account[0],gas:'100000000'},(err,result)=>{
        console.log(err)
        transactionResultGetter(res, err, result)
      }).catch(reason=>{
        transactionResultGetter(res, reason, null)
      })
    })
  }

  public async onChainCall(contract:any,methodName:string,param:any,extra:any){
    let account = await (window as any).web3.eth.getAccounts()
    let method = getContractMethod(contract,methodName,param)
    if(!method){
      return new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    }
    let gasSetting = GasSetting(extra)
    let sendParam={
      from:account[0],
      gasPrice:gasSetting.gasPrice,
      gas:gasSetting.gasLimit
    }
    return await new Promise(res=>{
      method!.func(...param).send(sendParam,(err,tx)=>{
        transactionResultGetter(res, err, tx)
      }).then(receipt=>{
        transactionResultGetter(res, receipt, null)
      })
    })
  }
  
}
export { ContractCall }