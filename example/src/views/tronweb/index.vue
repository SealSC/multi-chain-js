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
          <div @click="getAccount()">getAccount</div>
          <div @click="getBalance()">getBalance</div>
          <div @click="getBlock()">getBlock</div>
          <div @click="getBlockNumber()">getBlockNumber</div>
          <div @click="getTransaction()">getTransaction</div>
          <div @click="getTransactionCount()">getTransactionCount</div>
          <div @click="sendSignedTransaction()">sendSignedTransaction</div>
          <div @click="signWithWallet()">signWithWallet</div>
          <div @click="signWithPrivateKey()">signWithPrivateKey</div>
          <div @click="signTransaction()">signTransaction</div>
          <div @click="signTransactionPrivateKey()">signTransactionPrivateKey</div>
          <div @click="sendTransaction()">sendTransaction</div>
          <div @click="loadContract()">loadContract</div>
        </div>
      </div>
      <div class="container-web3-module">
        <span>connector</span>
        <div class="container-web3-module-right">
          <div @click="link()">link</div>
        </div>
      </div>
      <div class="container-web3-module">
        <span>contract</span>
        <div class="container-web3-module-right">
          <div @click="offChainCall()">offChainCall</div>
          <div @click="onChainCall()">onChainCall</div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name:"tronwebIndex",
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

    },
    getAccount(){

    },
    getBlock(){

    },
    getBlockNumber(){

    },
    getTransaction(){

    },
    getTransactionCount(){

    },
    sendSignedTransaction(){

    },
    signWithWallet(){

    },
    signWithPrivateKey(){

    },
    signTransaction(){

    },
    signTransactionPrivateKey(){

    },
    sendTransaction(){

    },
    loadContract(){

    },
    link(){

    },
    offChainCall(){

    },
    onChainCall(){
      
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
