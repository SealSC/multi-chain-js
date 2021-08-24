<template>
  <div id="app">
    <div id="nav">
       <div @click="init()">init polkadot</div>
      <div @click="OpenWallet()">OpenWallet</div>
      <div @click="getAccount()">getAccount</div>
      <div @click="getBlock()">getBlock</div>
      <div>4-功能</div>
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
  public async getAccount(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getAccount())
  }

  public async getBlock(){
    let ActionsIn = new Actions()
    console.log(await ActionsIn.actions.getBlock(6521853))
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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  div{
    width:200px;
    height: 80px;
    color: #FFFFFF;
    line-height: 80px;
    background: royalblue;
    cursor: pointer;
  }
}
</style>
