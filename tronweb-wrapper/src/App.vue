<template>
  <div id="app">
    <div id="nav">
      <div @click="getAccount">查询账户信息</div>
      <div @click="getBalance">获取余额</div>
      <div @click="getBlock">获取块</div>
      <div @click="getBlockByNumber">根据区块高度查询区块信息</div>
      <div @click="getTransaction">获取交易信息</div>
      <div @click="getTransactionCount">获取从此地址发送的交易数</div>
      <div @click="SendSignedTransaction">将已签名的交易广播到网络/发送签名交易</div>
      <div @click="signWithPrivateKey">需要私钥签名</div> 
      <div @click="SignWithWallet">根据钱包签名</div>
      <div @click="SignTransaction">签名交易</div>
      <div @click="SignTransactionPrivateKey">根据私钥签署交易</div>
      <div @click="sendTransaction">发送交易</div>
      <!-- <div @click="contract">建立合约</div>  -->
      <!-- <div>合约call</div> -->
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
    console.log(
      await new Actions().actions.getAccount(
        "TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH"
      ),
      "???"
    );
  }
  public async getBalance() {
    console.log(
      await new Actions().actions.getBalance(
        "TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH"
      ),
      "???"
    );
  }
  public async getBlock(){
    console.log(await new Actions().actions.getBlock(17584567), "???");
  }
  public async getBlockByNumber(){
    console.log(await new Actions().actions.getBlockNumber(123), "???");
  }
  public async getTransaction(){
    console.log(await new Actions().actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa'), "???");
  }
  public async getTransactionCount(){
    console.log(await new Actions().actions.getTransactionCount(), "???");
  }
  // public async contract(abiJson:any,contractAddress:string) {
  //   // console.log(await new Actions().actions,"???")
  //   let abi = [
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: "name",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "string",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         {
  //           name: "_spender",
  //           type: "address",
  //         },
  //         {
  //           name: "_value",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "approve",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "bool",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: "totalSupply",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "uint256",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         {
  //           name: "_from",
  //           type: "address",
  //         },
  //         {
  //           name: "_to",
  //           type: "address",
  //         },
  //         {
  //           name: "_value",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "transferFrom",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "bool",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: "decimals",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "uint8",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       constant: true,
  //       inputs: [
  //         {
  //           name: "_owner",
  //           type: "address",
  //         },
  //       ],
  //       name: "balanceOf",
  //       outputs: [
  //         {
  //           name: "balance",
  //           type: "uint256",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: "symbol",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "string",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         {
  //           name: "_to",
  //           type: "address",
  //         },
  //         {
  //           name: "_value",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "transfer",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "bool",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       constant: true,
  //       inputs: [
  //         {
  //           name: "_owner",
  //           type: "address",
  //         },
  //         {
  //           name: "_spender",
  //           type: "address",
  //         },
  //       ],
  //       name: "allowance",
  //       outputs: [
  //         {
  //           name: "",
  //           type: "uint256",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       payable: true,
  //       stateMutability: "payable",
  //       type: "fallback",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           name: "owner",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           name: "spender",
  //           type: "address",
  //         },
  //         {
  //           indexed: false,
  //           name: "value",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "Approval",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           name: "from",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           name: "to",
  //           type: "address",
  //         },
  //         {
  //           indexed: false,
  //           name: "value",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "Transfer",
  //       type: "event",
  //     },
  //   ];
  //   // console.log(await new Actions().actions.loadContract(abiJson,contractAddress), "???");
  //   this.myContract=await new Actions().actions.loadContract(abiJson,contractAddress)
  //   console.log(this.myContract,">>>")
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
    console.log(await new Actions().actions.sendTransaction(transactionObject), "???");
  }
  public async SignTransaction(dataToSign:object|string,address:string){
    console.log(await new Actions().actions.signTransaction(dataToSign,address), "???");
  }
  public async SignTransactionPrivateKey(){
    let dataToSign={
      from:"TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH",
      amount:10,
      to:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb"
    }
    let privateKey="xxx"
    console.log(await new Actions().actions.signTransactionPrivateKey(dataToSign,privateKey), "???");
  }
  public async signWithPrivateKey(){
    let dataToSign={
      from:"TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH",
      amount:10,
      to:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb"
    }
    let privateKey="xxx"
    console.log(await new Actions().actions.signWithPrivateKey(dataToSign,privateKey), "???");
  }
  public async SignWithWallet(){
    console.log(await new Actions().actions.signWithWallet("eee"), "???");
  }
  public async SendSignedTransaction(privateKey:string){
    console.log(await new Actions().actions.sendSignedTransaction(privateKey), "???");
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
  // display: flex;
  // justify-content: space-around;
  // align-items: center;
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
