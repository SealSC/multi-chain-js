import { Result } from '../result'

class Operational {
  constructor(){
    
  }
  public getAccount(){
    return new Result(null,0)
  }
  public getBlock(blockNumber:string){
    return new Result(null,0)
  }
  public getBlockNumber(){
    return new Result(null,0)
  }
  public getBalance(address:string){
    return new Result(null,0)
  }
  public getTransaction(){
    return new Result(null,0)
  }
}

export { Operational }