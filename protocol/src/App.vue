<template>
  <div id="app">
    <div id="nav">
      <div @click="OpenWallet">1-功能</div>
      <div>2-功能</div>
      <div>3-功能</div>
      <div>4-功能</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TypesExtend  } from "../src/protocol/protocol";
import { ProxyExtend } from '../src/protocol/proxy'

@Component({
  components: {

  },
})
export default class Home extends Vue {
  private message: number = 1
  
  public OpenWallet(): any {
    console.log(TypesExtend.operational.getAccount())
    console.log(TypesExtend.operational.getBlock())
    console.log(ProxyExtend.link('web3'))
  }

  get myName(): string {
    return `this.name is ${this.message}`
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
