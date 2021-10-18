<template>
  <div id="app">
    <div class="title">multi-chain-js SDK Example</div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  created(){
    window.document.documentElement.setAttribute( "data-theme", 'yellowTheme' );
  }
}
</script>

<style lang="scss">

.title{
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;
}
</style>
