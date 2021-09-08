<template>
    <div class="container-web3">
      <div class="container-web3-module">
        <span>初始化</span>
        <div class="container-web3-module-right">
          <div @click="init()">init</div>
        </div>
      </div>
      <div class="container-web3-module">
        <span>actions</span>
        <div class="container-web3-module-right">
          <div>getAccount</div>
          <div>getBalance</div>
          <div>getBlock</div>
          <div>getBlockNumber</div>
          <div>getTransaction</div>
          <div>getTransactionCount</div>
          <div>sendSignedTransaction</div>
          <div>signWithWallet</div>
          <div>signWithPrivateKey</div>
          <div>signTransaction</div>
          <div>signTransactionPrivateKey</div>
          <div>sendTransaction</div>
          <div>loadContract</div>
        </div>
      </div>
      <div class="container-web3-module">
        <span>connector</span>
        <div class="container-web3-module-right">
          <div>link</div>
        </div>
      </div>
      <div class="container-web3-module">
        <span>contract</span>
        <div class="container-web3-module-right">
          <div>offChainCall</div>
          <div>onChainCall</div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name:"web3Index",
  data(){
    return{
       
    }
  },
  components: {
     
  },
  mounted(){
   
  },
  computed: {
    
  },

  methods:{
    init(){

    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";
.container-web3{
  .container-web3-module{
    display: flex;
    span{
      font-size: 16px;
      font-weight: 500;
      display: inline-block;
      width: 8%;
      margin-top: 20px;
    }
    .container-web3-module-right{
      display: flex;
      // align-items: center;
      flex-flow: row wrap;
      width: 80%;
      div{
        width: 200px;
        height: 50px;
        background: #409EFF ;
        border-radius: 4px;
        line-height: 50px;
        text-align: center;
        margin: 20px 10px;
        cursor: pointer;
      }
    }
   
  }
}
  
@media screen and (max-width: 900px){
    
}
</style>
