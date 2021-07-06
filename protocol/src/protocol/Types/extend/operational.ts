import { Result } from '../result'
import finedStatus  from '../../Consts/consts'
interface OperationalInterface{
  getAccount(): Object
  getBlock(blockNumber:string): Object 
  getBlockNumber(): Object
  getBalance(address:string): Object
  getTransaction(): Object
  getTransactionCount(address:string): object
  sign(dataToSign:any,address:string): object
  signTransaction(trabsactionObject:any,address:string): object
  sendSignedTransaction(signedTransactionData:any): object
}

class Operational implements OperationalInterface{
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