import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'
import { GasSetting , transactionResultGetter } from '../wrapper/utils' 

function getContractMethod(contract:any,methodName:string,param:any){
  let method;
  try{
    method = contract.methods[methodName]
  }catch(error){
    method = null
  }
  
  if(!method) return null
  let prop = method(...param)._method
  return {
    prop:prop,
    func:method
  }
}

class ContractCall {
  public async loadContract(abi:any,address:string){
    try{
      let Contract: any = await new (window as any).web3.eth.Contract(abi,address)
      return new Result(PredefinedStatus.SUCCESS(Contract))
    }catch(err){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
  public async offChainCall(contract:any,methodName:string,param:[],amount,extra){
    let account = Object.keys((window as any).web3).length !== 0 ? await (window as any).web3.eth.getAccounts():[''];
    let method = getContractMethod(contract,methodName,param)
   
    if(!method){
      return new Result(PredefinedStatus.ERROR_STATE('参数有误'))
    }
    return await new Promise(async res=>{
      method!.func(...param).call({from:account[0],gas:'100000000'},(err,result)=>{
        transactionResultGetter(res, result, err)
      }).catch(reason=>{
        console.log(2)
        transactionResultGetter(res, reason, null)
      })
    })
  }

  public async onChainCall(contract:any,methodName:string,param:any,extra:any){
 
    let account = Object.keys((window as any).web3).length !== 0 ? await (window as any).web3.eth.getAccounts():[''];
    console.log(account)
  
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
        // transactionResultGetter(res, err, tx)
      }).then(receipt=>{
        transactionResultGetter(res, receipt, null)
      }).catch(reason=>{
        transactionResultGetter(res, reason, null)
      })
    })
  }
  
}
export { ContractCall , getContractMethod }