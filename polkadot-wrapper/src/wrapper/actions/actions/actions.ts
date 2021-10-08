import { GetAccount } from "./getAccount"
import { GetBalance } from "./getBalance"
import { GetBlock } from './getBlock'
import { GetBlockNumber }  from './getBlockNumber' 
import { GetTransaction } from './getTransaction'
import { GetTransactionCount } from './getTransactionCount'
import { SendSignedTransaction } from './sendSignedTransaction'
import { SignWithPrivateKey } from './signWithPrivateKey'
import { SignWithWallet } from './signWithWallet'
import { SignTransaction } from './signTransaction'
import { SignTransactionPrivateKey } from "./signTransactionPrivateKey"
import { SendTransaction } from './sendTransaction'

class ActionsIn{
  constructor(){
     
  }
  public async getAccount(){
    return await new GetAccount().getAccount()
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
  public async sendSignedTransaction(address:string,count:string|number){
    return await new SendSignedTransaction().sendSignedTransaction(address,count)
  }
  public async signWithWallet(dataToSign:any|string){
    return await new SignWithWallet().signWithWallet(dataToSign)
  }
  public async signWithPrivateKey(data:string|string,privateKey:string){
    return await new SignWithPrivateKey().signWithPrivateKey(data,privateKey)
  }
  public async signTransaction(dataToSign:object|string,address:string){
    return await new SignTransaction().signTransaction(dataToSign,address)
  }
  public async signTransactionPrivateKey(dataToSign:object|string,privateKey:string){
    return await new SignTransactionPrivateKey().signTransactionPrivateKey(dataToSign,privateKey)
  }
  public async sendTransaction(transactionObject:any){
    return await new SendTransaction().sendTransaction(transactionObject)
  } 
}

export { ActionsIn } 
 