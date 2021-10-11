import { GetAccount } from "./getAccount"
import { GetBalance } from "./getBalance"
import { GetBlock } from './getBlock'
import { GetBlockNumber } from './getBlockNumber'
import { GetTransaction } from './getTransaction'
import { GetTransactionCount } from './getTransactionCount'
import { SendSignedTransaction } from './sendSignedTransaction'
import { SignWithPrivateKey } from './signWithPrivateKey'
import { SignWithWallet } from './signWithWallet'
import { SignTransaction } from './signTransaction'
import { SignTransactionPrivateKey } from "./signtransactionPrivateKey"
import { SendTransaction } from './sendTransaction'
class ActionsIn {
  constructor() {

  }
  public async getAccount() {
    return await new GetAccount().getAccount()
  }
  public async getBalance(address: string) {
    return await new GetBalance().getBalance(address)
  }
  public async getBlock(block: string | number) {
    return await new GetBlock().getBlock(block)
  }
  public async getBlockNumber(address: number) {
    return await new GetBlockNumber().getBlockNumber(address)
  }
  public async getTransaction(txHash: string) {
    return await new GetTransaction().getTransaction(txHash)
  }
  public async getTransactionCount(address?: string) {
    return await new GetTransactionCount().getTransactionCount()
  }
  public async sendSignedTransaction(data: any) {
    return await new SendSignedTransaction().sendSignedTransaction(data)
  }
  public async signWithWallet(msg: string, dataToSign: any | string) {
    return await new SignWithWallet().signWithWallet(msg, dataToSign)
  }
  public async signWithPrivateKey(data: string | string, privateKey: string) {
    return await new SignWithPrivateKey().signWithPrivateKey(data, privateKey)
  }
  public async signTransaction(address: string, obj?: object,) {
    return await new SignTransaction().signTransaction(address)
  }
  public async signTransactionPrivateKey(dataToSign: object | string, privateKey: string) {
    return await new SignTransactionPrivateKey().signTransactionPrivateKey(dataToSign, privateKey)
  }
  public async sendTransaction(data) {
    return await new SendTransaction().sendTransaction(data)
  }
}

export { ActionsIn }

