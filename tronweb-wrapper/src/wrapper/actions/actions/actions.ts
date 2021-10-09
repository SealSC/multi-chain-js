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
import { LoadContract } from './loadContract'

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
  public async getBlockNumber(block:string|number){
    return await new GetBlockNumber().getBlockNumber(block)
  }
  public async getTransaction(txHash:string){
    return await new GetTransaction().getTransaction(txHash)
  }
  public async getTransactionCount(){
    return await new GetTransactionCount().getTransactionCount()
  }
  public async sendSignedTransaction(to,amount,from,options,privateKey:string){
    return await new SendSignedTransaction().sendSignedTransaction(to,amount,from,options,privateKey)
  }
  public async signWithWallet(content:string,dataToSign?:object|string,address?:string){
    return await new SignWithWallet().signWithWallet(content)
  }

  public async signWithPrivateKey(){
    return await new SignWithPrivateKey().signWithPrivateKey()

  }
  public async signTransaction(dataToSign:object|string,address:string){
    return await new SignTransaction().signTransaction(dataToSign,address)
  }

  public async signTransactionPrivateKey(dataToSign:object,privateKey:string){

    return await new SignTransactionPrivateKey().signTransactionPrivateKey(dataToSign,privateKey)
  }
  public async sendTransaction(transactionObject:any){
    return await new SendTransaction().sendTransaction(transactionObject)
  }
  public async loadContract(abiJson:any,contractAddress:string){
    return await new LoadContract().loadContract(abiJson,contractAddress)
  }
 
}

export { ActionsIn } 
 