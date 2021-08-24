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
  public async offChainCall(contract:any,methodName:string,param:[],amount,extra){
    
  }

  public async onChainCall(contract:any,methodName:string,param:any,extra:any){
  
  }
  
}
export { ContractCall , getContractMethod }