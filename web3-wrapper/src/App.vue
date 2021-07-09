<template>
  <div id="app">
    <div id="nav">
      <div @click="openWallet">吊起钱包</div>
      <div @click="getAccount">getAccount</div>
      <div @click="getBlock">getBlock</div>
      <div @click="getBlockNumber">getBlockNumber</div>
      <div @click="getBalance">getBalance</div>
      <div @click="getTransaction">getTransaction</div>
      <div @click="getTransactionCount">getTransactionCount</div>
      <div @click="sign">sign</div>
      <div @click="signTransaction">signTransaction</div>
      <div @click="sendSignedTransaction">sendSignedTransaction</div>
    </div>
  </div>
</template>
<script>
import wallet from '../src/wrapper/web3'
import { ActionsExtend } from '../src/wrapper/wrapper'
export default {
  async mounted() {
    window.web3 = await wallet.web3web3Install()
  },
  created() {
    console.log("created")
  },
  methods:{
    async openWallet() {
      ethereum.enable().then((account)=>{
        console.log(account)
      })
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
