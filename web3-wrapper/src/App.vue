<template>
  <div id="app">
    <div id="nav">
      <div @click="WalletInit">初始化web3</div>
      <div @click="openWallet">调起钱包</div>
      <div @click="getAccount">getAccount</div>
      <div @click="getBlock">getBlock</div>
      <div @click="getBlockNumber">getBlockNumber</div>
      <div @click="getBalance">getBalance</div>
      <div @click="getTransaction">getTransaction</div>
      <div @click="getTransactionCount">getTransactionCount</div>
      <div @click="sign">sign</div>
      <div @click="signTransaction">signTransaction</div>
      <div @click="sendSignedTransaction">sendSignedTransaction</div>
      <div @click="loadContract">初始化合约</div>
      <div @click="onChainCall">onChainCall</div>
      <div @click="offChainCall">offChainCall</div>
    </div>
  </div>
</template>
<script>
import { ActionsExtend } from '../src/wrapper/wrapper'
import ERC20ABI from '../src/abis/ERC20-ABI.json'
export default {
  data(){
    return{
      ERC20ABIContract:null
    }
  },
  async mounted() {
    // window.web3 = await wallet.web3web3Install()
  },
  created() {
    console.log("created")
  },
  methods:{
    async loadContract(){
      this.ERC20ABIContract=await ActionsExtend.actions.loadContract(ERC20ABI,'0xdac17f958d2ee523a2206206994597c13d831ec7')
    },
    async offChainCall(){
      //call调用
      console.log(await ActionsExtend.contract.offChainCall(this.ERC20ABIContract.data,'decimals',[]))
    },
    async onChainCall(){
      //send调用
      console.log(await ActionsExtend.contract.onChainCall(this.ERC20ABIContract.data,'approve',['0x1942B97fa1bd85Cc3ee98269032ff05285569749','0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'],{gasPrice:'4000000000',gasLimit:'150000'}))
    },
    async WalletInit() {
      console.log(await ActionsExtend.init())
    },
    async openWallet() {
      console.log(await ActionsExtend.connector.link())
    },
    async getAccount() {
      console.log(await ActionsExtend.actions.getAccount())
    },
    async getBlock() {
      console.log(await ActionsExtend.actions.getBlock(9603492))
    },
    async getBlockNumber() {
      console.log(await ActionsExtend.actions.getBlockNumber())
    },
    async getBalance() {
      console.log(await ActionsExtend.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829'))
    },
    async getTransaction() {
      console.log(await ActionsExtend.actions.getTransaction('0x65d3cada398bfcd70098ed955ff645b072c6df0d001f61f4b1c181cfdf7d1309'))
    },
    async getTransactionCount() {
      console.log(await ActionsExtend.actions.getTransactionCount('0x5B6C6709d1000db91252c8c6E84B8987D1D10829'))
    },
    sign() {
      
    },
    signTransaction() {
      
    },
    sendSignedTransaction() {
      
    }

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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  div{
    width:200px;
    height: 80px;
    color: #FFFFFF;
    line-height: 80px;
    background: royalblue;
    cursor: pointer;
    margin: 16px;
  }
}
</style>
