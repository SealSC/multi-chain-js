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
    getAccount() {
      console.log('getAccount')
    },
    getBlock() {
      
    },
    getBlockNumber() {
      
    },
    getBalance() {
      
    },
    getTransaction() {
      
    },
    getTransactionCount() {
      
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
