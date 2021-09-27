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
import { SignTransactionPrivateKey } from "./signtransactionPrivateKey"
import { SendTransaction } from './sendTransaction'
// import { LoadContract } from './loadContract'

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
  public async getBlockNumber(address:number){
    return await new GetBlockNumber().getBlockNumber(address)
  }
  public async getTransaction(txHash:string){
    return await new GetTransaction().getTransaction(txHash)
  }
  public async getTransactionCount(){
    return await new GetTransactionCount().getTransactionCount()
  }
  public async sendSignedTransaction(addressFrom:string,dataToSign:string){
    return await new SendSignedTransaction().sendSignedTransaction(addressFrom,dataToSign)
  }
  public async signWithWallet(dataToSign:any|string){
    return await new SignWithWallet().signWithWallet(dataToSign)
  }
  public async signWithPrivateKey(data:string|string,privateKey:string){
    return await new SignWithPrivateKey().signWithPrivateKey(data,privateKey)
  }
  public async signTransaction(address:string){
    return await new SignTransaction().signTransaction(address)
  }
  public async signTransactionPrivateKey(dataToSign:object|string,privateKey:string){
    return await new SignTransactionPrivateKey().signTransactionPrivateKey(dataToSign,privateKey)
  }
  public async sendTransaction(addressFrom:string,dataToSign:string){
    return await new SendTransaction().sendTransaction(addressFrom,dataToSign)
  }
 
 
}

export { ActionsIn } 
 