<template>
  <div id="app">
    <div id="nav">
      <div @click="OpenWallet">OpenWallet</div>
      <div>2-功能</div>
      <div>3-功能</div>
      <div>4-功能</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { component } from "vue/types/umd";
 
@Component({
  components: {

  },
})
export default class Home extends Vue {
  private message: number = 1
  
  public async OpenWallet() {
    
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
