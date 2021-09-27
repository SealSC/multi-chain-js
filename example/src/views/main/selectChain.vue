<template>
  <div class="container">
    <div class="container-title">
      Element-UI:
    </div>

    <el-button type="primary" @click="openChain">selectChain</el-button>
    <chain-list></chain-list>
  </div>
</template>

<script>
import ChainList from '../../components/chainList.vue'

export default {
  name:"selectChain",
  data(){
    return{
       
    }
  },
  components: {
    ChainList
  },
  mounted(){
   
  },
  computed: {
    
  },

  methods:{
    openChain(){
      this.$store.commit('updateShowModal',true)
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";
.container{
  display: flex;
  align-items: center;
  .container-title{
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
  }
}
  
@media screen and (max-width: 900px){
    
}
</style>
