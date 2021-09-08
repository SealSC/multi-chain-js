<template>
  <div id="app">
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


</style>
