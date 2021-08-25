<template>
  <div id="app">
    <div id="nav">
       <div @click="init()">init polkadot</div>
      <div @click="OpenWallet()">OpenWallet</div>
      <div @click="linkWallet()">linkWallet</div>
      <div @click="getAccount()">getAccount</div>
      <div @click="getBlock()">getBlock</div>
      <div @click="getBlockNumber()">getBlockNumber</div>
      <div @click="getBalance()">getBalance</div>
      <div @click="getTransaction()">getTransaction</div>
      <div @click="getTransactionCount()">getTransactionCount</div>
      <div @click="signWithWallet()">signWithWallet</div>
      <div @click="signWithPrivateKey()">signWithPrivateKey</div>
      <div @click="sendTransaction()">sendTransaction</div>
      <div @click="sendSignedTransaction()" >sendSignedTransaction</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { component } from "vue/types/umd";
import { Actions } from './wrapper/wrapper' 
 
@Component({
  components: {

  },
})
export default class Home extends Vue {
  private message: number = 1
  public async init() {
    let ActionsIn = new Actions()
    await ActionsIn.init();
  }
  public async OpenWallet() {
    
  }

  public async linkWallet() {
    let ActionsIn = new Actions()
    console.log(await ActionsIn.connector.link())
  }

  public async getAccount(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getAccount())
  }

  public async getBlock(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getBlock(6521853))
  }

  public async getBlockNumber(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getBlockNumber())
  }

  public async getBalance(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getBalance('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h'))
  }

  public async getTransaction(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getTransaction('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h'))
  }

  public async getTransactionCount(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getTransactionCount('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h'))
  }

  public async signWithWallet(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.signWithWallet('signWithWallet','1'))
  }

  public async signWithPrivateKey(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.signWithPrivateKey('1','2'))
  }

  public async sendTransaction(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.sendTransaction('1'))
  }

  public async sendSignedTransaction(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.sendSignedTransaction('1'))
  }

  
  
  public mounted() {
    console.log("mounted")
  }

  public created() {
    console.log("created")
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
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  div{
    width:200px;
    height: 80px;
    margin: 10px;
    color: #FFFFFF;
    line-height: 80px;
    background: royalblue;
    cursor: pointer;
  }
}
</style>
