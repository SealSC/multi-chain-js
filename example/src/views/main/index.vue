<template>
    <div> 
      <select-chain></select-chain>
    </div>
</template>

<script>
import SelectChain from './selectChain.vue'

export default {
  data(){
    return{
       
    }
  },
  components: {
    SelectChain
  },
  mounted(){
   
  },
  computed: {
    
  },

  methods:{
     
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";
 
body * {
  box-sizing: border-box;
}
body {
  font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma,
    Arial, PingFang SC-Light, Microsoft YaHei;
}
  
@media screen and (max-width: 900px){
    
}
</style>
