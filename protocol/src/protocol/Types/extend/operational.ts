import { Result } from '../result'
import finedStatus  from '../../Consts/consts'
import {  
  getAccountInterface,
  getBlockInterface,
  getBlockNumbeInterface,
  getBalanceInterface,
  getTransactionInterface,
  getTransactionCountInterface,
  signInterface,
  signTransactionInterface,
  sendSignedTransactionInterface,
  loadContractInterface
} from './interface'

interface OperationalInterface{
  loadContract():loadContractInterface
  getAccount():getAccountInterface
  getBlock(blockNumber:string): getBlockInterface 
  getBlockNumber(): getBlockNumbeInterface
  getBalance(address:string): getBalanceInterface
  getTransaction(): getTransactionInterface
  getTransactionCount(address:string): getTransactionCountInterface
  sign(dataToSign:any,address:string): signInterface
  signTransaction(trabsactionObject:any,address:string): signTransactionInterface
  sendSignedTransaction(signedTransactionData:any): sendSignedTransactionInterface
}

class Operational implements OperationalInterface{
  public loadContract(){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public getAccount(){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public getBlock(blockNumber:string){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public getBlockNumber(){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public getBalance(address:string){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public getTransaction(){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public getTransactionCount(address:string){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public sign(dataToSign:any,address:string){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public signTransaction(trabsactionObject:any,address:string){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
  public sendSignedTransaction(signedTransactionData:any){
    return new Result(finedStatus.DEFAULT_STATE(null))
  }
}

export { Operational }