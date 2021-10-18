<template>
    <div class="container-web3">
      <div class="container-web3-module">
        <span>init</span>
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
          <div @click="loadContract()">loadContract</div>
          <div @click="offChainCall()">offChainCall</div>
          <div @click="onChainCall()">onChainCall</div>
        </div>
      </div>
    </div>
</template>

<script>
import * as a from  '@sealsc/web3-wrapper'

import { Loading } from 'element-ui'
import ERC20 from '../../utils/abis/ERC20-ABI.json'

export default {
  name:"web3Index",
  data(){
    return{
      actionsIn:null,
      LoadingIn:null
    }
  },
  components: {
     
  },
  mounted(){
    let actionIn = a.Actions 
    this.actionsIn= new actionIn()
  },
  computed: {
    
  },

  methods:{
    async init(){
      let init = await this.actionsIn.init()
      this.$alert(init, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async getAccount(){
      let Accounts = await this.actionsIn.actions.getAccount()
      console.log(Accounts)
      this.$alert(Accounts, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    getBalance(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
    },
    getBlock(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getBlock(9603492).then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
    },
    getBlockNumber(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getBlockNumber().then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
    },
    getTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getTransaction('0x65d3cada398bfcd70098ed955ff645b072c6df0d001f61f4b1c181cfdf7d1309').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
    },
    getTransactionCount(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getTransactionCount('0x5B6C6709d1000db91252c8c6E84B8987D1D10829').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
    },
    sendSignedTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.sendSignedTransaction("0xf8527b8502340be400830186a080808081e6a09b111a9f5f50d207dfe9cd8beb619e6531f7dc84faea934e58426c7126fae3d2a01b484f72e5644327d244856ceb592b57b47b3438af35b12a30904b7b61975237").then((res)=>{
        console.log(res)
        this.LoadingIn.close()
        this.$alert(res, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      });
    },
    signWithWallet(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signWithWallet('32','0x5B6C6709d1000db91252c8c6E84B8987D1D10829').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
       
    },
    signWithPrivateKey(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signWithPrivateKey('3','4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      });
    },
    signTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      });     
    },
    signTransactionPrivateKey(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000",
        value:"1"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890').then((result)=>{
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      });
    
    }, 
    sendTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.sendTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        to: '0xd49c38C6CBaCc98444930C4524Dff73e67cA2e39',
        value: '10'
      }).then((res)=>{
        console.log(res)
        this.LoadingIn.close()
        this.$alert(res, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.loadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      });
    },
    async loadContract(){
      let abis =  await this.actionsIn.contract.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      console.log(abis)
      this.$alert('Print to the console', 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async link(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let accounts =  await this.actionsIn.connector.link();
      this.LoadingIn.close()
      this.$alert(accounts, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {
         
        }
      });
    },
    async offChainCall(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Contract =  await this.actionsIn.contract.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      this.actionsIn.contract.offChainCall(Contract.data,'name',[],'','').then((result)=>{
        console.log(result)
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        console.log(error)
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
    },
    async onChainCall(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Contract =  await this.actionsIn.contract.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      this.actionsIn.contract.onChainCall(Contract.data,'approve',
      ['0x5B6C6709d1000db91252c8c6E84B8987D1D10829','0'],
      {gasPrice:'4000000000',gasLimit:'150000'}).then((result)=>{
        console.log(result)
        this.LoadingIn.close()
        this.$alert(result, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      }).catch((error)=>{
        console.log(error)
        this.LoadingIn.close()
        this.$alert(error, 'Result', {
          confirmButtonText: 'Sure',
          callback: action => {

          }
        });
      })
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
