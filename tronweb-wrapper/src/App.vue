<template>
  <div id="app">
    <div id="nav">
      <div @click="getAccount">getAccount</div>
      <div @click="getBalance">getBalance</div>
      <div @click="getBlock">getBlock</div>
      <div @click="getBlockByNumber">getBlockByNumber</div>
      <div @click="getTransaction">getTransaction</div>
      <div @click="getTransactionCount">getTransactionCount</div>
      <div @click="SendSignedTransaction">SendSignedTransaction</div>
      <div @click="signWithPrivateKey">signWithPrivateKey</div> 
      <div @click="SignWithWallet">SignWithWallet</div>
      <div @click="SignTransaction">SignTransaction</div>
      <div @click="SignTransactionPrivateKey">SignTransactionPrivateKey</div>
      <div @click="sendTransaction">sendTransaction</div>
      <!-- <div @click="contract">contract</div>  -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Actions } from "./wrapper/wrapper";
import {ContractCall} from "./wrapper/contractCall"
import web3 from "./protocol/web3"
@Component({
  components: {},
})
export default class Home extends Vue {
  // public contract=""
  private myContract="22"
  public async getAccount(){
    await new Actions().actions.getAccount(
        "TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH"
      )
  }
  public async getBalance() {
    await new Actions().actions.getBalance(
        "TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH"
      )
  }
  public async getBlock(){
    await new Actions().actions.getBlock(17584567)
  }
  public async getBlockByNumber(){
    await new Actions().actions.getBlockNumber(123)
  }
  public async getTransaction(){
    await new Actions().actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa')
  }
  public async getTransactionCount(){
    await new Actions().actions.getTransactionCount()
  }
  // public async contract(abiJson:any,contractAddress:string) {
  //   this.myContract=await new Actions().actions.loadContract(abiJson,contractAddress)
  // }
  // public async contractCall() {
  //   await ContractCall.offChainCall(this.myContract.data,'decimals',[])
  // }
  // public async contractSend() {
  //   await ContractCall.onChainCall(this.myContract.data,'decimals',[],{callValue,feeLimit,shouldPollResponse})
  // }
  public async sendTransaction(){
    let transactionObject={
      address:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
      amount:2
    }
    await new Actions().actions.sendTransaction(transactionObject)
  }
  public async SignTransaction(dataToSign:object|string,address:string){
    await new Actions().actions.signTransaction(dataToSign,address)
  }
  public async SignTransactionPrivateKey(){
    let dataToSign={
      from:"TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH",
      amount:10,
      to:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb"
    }
    let privateKey="xxx"
    await new Actions().actions.signTransactionPrivateKey(dataToSign,privateKey)
  }
  public async signWithPrivateKey(){
    let dataToSign={
      from:"TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH",
      amount:10,
      to:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb"
    }
    let privateKey="xxx"
    await new Actions().actions.signWithPrivateKey(dataToSign,privateKey)
  }
  public async SignWithWallet(){
    await new Actions().actions.signWithWallet("eee")
  }
  public async SendSignedTransaction(privateKey:string){
    await new Actions().actions.sendSignedTransaction(privateKey)
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  div {
    margin-top: 10px;
    width: 200px;
    height: 80px;
    color: #ffffff;
    line-height: 80px;
    background: royalblue;
    cursor: pointer;
  }
}
</style>
