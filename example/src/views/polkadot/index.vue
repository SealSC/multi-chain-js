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
import * as Actions from '@sealsc/polkadot-wrapper'
import { Loading } from 'element-ui'
import ERC20 from '../../utils/abis/ERC20-ABI.json'

export default {
  name:"polkadotIndex",
  data(){
    return{
      actionsIn:null,
      LoadingIn:null
    }
  },
  components: {
     
  },
  mounted(){
    let actionIn = Actions.Actions 
    this.actionsIn= new actionIn()
  },
  computed: {
    
  },

  methods:{
    async init(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let result = await this.actionsIn.init('wss://rpc.polkadot.io').then((result)=>{
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
    getAccount(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getAccount().then((result)=>{
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
    getBalance(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getBalance('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h').then((result)=>{
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
      this.actionsIn.actions.getBlock(6521853).then((result)=>{
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
    async getTransactionCount(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let TransactionCount = await this.actionsIn.actions.getTransactionCount('0x5B6C6709d1000db91252c8c6E84B8987D1D10829')
      console.log(TransactionCount)
      this.LoadingIn.close()
      this.$alert(TransactionCount, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async sendSignedTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let sendSignedTransaction = await this.actionsIn.actions.sendSignedTransaction('14EHXD3oats4uQQ3Rp6DByaiQzowt5ep4R5fXCpMkkF3oDps',0.1).then((result)=>{
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
    async signWithWallet(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let sign = await this.actionsIn.actions.signWithWallet('2').then((res)=>{
        this.LoadingIn.close()
        this.$alert(res, 'Result', {
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
    async signWithPrivateKey(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let sign = await this.actionsIn.actions.signWithPrivateKey('3','4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
      console.log(sign)
      this.LoadingIn.close()
      this.$alert(sign, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async signTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Signtranction = await this.actionsIn.actions.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      console.log(Signtranction)
      this.LoadingIn.close()
      this.$alert(Signtranction, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async signTransactionPrivateKey(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Signtranction = await this.actionsIn.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000",
        value:"1"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
      console.log(Signtranction)
      this.LoadingIn.close()
      this.$alert(Signtranction, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async sendTransaction(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let sendTransaction = await this.actionsIn.actions.sendTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        to: '0xd49c38C6CBaCc98444930C4524Dff73e67cA2e39',
        value: '10'
      })
      this.LoadingIn.close()
      this.$alert(sendTransaction, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async loadContract(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let abis =  await this.actionsIn.contract.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      this.LoadingIn.close()
      this.$alert(abis, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async link(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let accounts = await this.actionsIn.connector.link();
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
      let offChainCall =  await this.actionsIn.contract.offChainCall(Contract.data,'name',[],'','')
      console.log(offChainCall)
      this.LoadingIn.close()
      this.$alert(offChainCall, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
    },
    async onChainCall(){
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Contract =  await this.actionsIn.contract.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      let onChainCall = await this.actionsIn.contract.onChainCall(Contract.data,'approve',['0x5B6C6709d1000db91252c8c6E84B8987D1D10829','0'],{gasPrice:'4000000000',gasLimit:'150000'})
      this.LoadingIn.close()
      this.$alert(onChainCall, 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {

        }
      });
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
