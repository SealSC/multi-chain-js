import { GetAccount } from "./getAccount"
import { GetBalance } from "./getBalance"
import { GetBlock } from './getBlock'
import { GetBlockNumber } from './getBlockNumber' 
import { GetTransaction } from './getTransaction'
import { GetTransactionCount } from './getTransactionCount'
import { SendSignedTransaction } from './sendSignedTransaction'
import { Sign } from './sign'
import { SignTransaction } from './signTransaction'
import { LoadContract } from './loadContract'

class ActionsIn{
  public async getAccount(){
    return await GetAccount.call(this)
  }
  public async getBalance(address:string){
    return await new GetBalance().getBalance(address)
  }
  public async getBlock(block:string|number){
    return await new GetBlock().getBlock(block)
  }
  public async getBlockNumber(){
    return await new GetBlockNumber().getBlockNumber()
  }
  public async getTransaction(txHash:string){
    return await new GetTransaction().getTransaction(txHash)
  }
  public async getTransactionCount(txHash:string){
    return await new GetTransactionCount().getTransactionCount(txHash)
  }
  public async sendSignedTransaction(dataToSign:object){
    return await new SendSignedTransaction().sendSignedTransaction(dataToSign)
  }
  public async sign(dataToSign:object|string,address:string){
    return await new Sign().sign(dataToSign,address)
  }
  public async signTransaction(dataToSign:object|string,address:string){
    return await new SignTransaction().signTransaction(dataToSign,address)
  }
  public async loadContract(contract:any,address:string){
    return await new LoadContract().loadContract(contract,address)
  }
}

export { 
  ActionsIn
 }