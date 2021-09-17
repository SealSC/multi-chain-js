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
 
import * as a from  './bundle.js'
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
      console.log(await this.actionsIn.init())
    },
    async getAccount(){
      let Accounts = await this.actionsIn.actions.getAccount()
      console.log(Accounts)
      this.$alert(Accounts, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async getBalance(){
      let Balance = await this.actionsIn.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829')
      console.log(Balance)
      this.$alert(Balance, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async getBlock(){
      let Block = await this.actionsIn.actions.getBlock(9603492)
      this.$alert(Block, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async getBlockNumber(){
      let BlockNumber = await this.actionsIn.actions.getBlockNumber()
      console.log(BlockNumber)
      this.$alert(BlockNumber, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async getTransaction(){
      let Transaction = await this.actionsIn.actions.getTransaction('0x65d3cada398bfcd70098ed955ff645b072c6df0d001f61f4b1c181cfdf7d1309')
      console.log(Transaction)
      this.$alert(Transaction, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async getTransactionCount(){
      let TransactionCount = await this.actionsIn.actions.getTransactionCount('0x5B6C6709d1000db91252c8c6E84B8987D1D10829')
      console.log(TransactionCount)
      this.$alert(TransactionCount, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    sendSignedTransaction(){
      this.loadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.sendSignedTransaction("0xf8527b8502340be400830186a080808081e6a09b111a9f5f50d207dfe9cd8beb619e6531f7dc84faea934e58426c7126fae3d2a01b484f72e5644327d244856ceb592b57b47b3438af35b12a30904b7b61975237").then((res)=>{
        console.log(res)
        this.loadingIn.close()
        this.$alert(res, 'Result', {
          confirmButtonText: '确定',
          callback: action => {

          }
        });
      }).catch(()=>{
        this.loadingIn.close()
      });
    },
    async signWithWallet(){
      let sign = await this.actionsIn.actions.signWithWallet('2','0x5B6C6709d1000db91252c8c6E84B8987D1D10829')
      console.log(sign)
      this.$alert(sign, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async signWithPrivateKey(){
      let sign = await this.actionsIn.actions.signWithPrivateKey('3','4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
      console.log(sign)
      this.$alert(sign, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async signTransaction(){
      let Signtranction = await this.actionsIn.actions.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      console.log(Signtranction)
      this.$alert(Signtranction, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async signTransactionPrivateKey(){
      let Signtranction = await this.actionsIn.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000",
        value:"1"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
      console.log(Signtranction)
      this.$alert(Signtranction, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    }, 
    sendTransaction(){
      this.loadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.sendTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        to: '0xd49c38C6CBaCc98444930C4524Dff73e67cA2e39',
        value: '10'
      }).then((res)=>{
        console.log(res)
        this.loadingIn.close()
        this.$alert(res, 'Result', {
          confirmButtonText: '确定',
          callback: action => {

          }
        });
      }).catch((error)=>{
        this.loadingIn.close()
      });
    },
    async loadContract(){
      let abis =  await this.actionsIn.actions.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      console.log(abis)
    },
    async link(){
      await this.actionsIn.connector.link();
    },
    async offChainCall(){
      let Contract =  await this.actionsIn.actions.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      let offChainCall =  await this.actionsIn.contract.offChainCall(Contract.data,'name',[],'','')
      console.log(offChainCall)
      this.$alert(offChainCall, 'Result', {
        confirmButtonText: '确定',
        callback: action => {

        }
      });
    },
    async onChainCall(){
      let Contract =  await this.actionsIn.actions.loadContract(ERC20,'0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513')
      let onChainCall = await this.actionsIn.contract.onChainCall(Contract.data,'approve',['0x5B6C6709d1000db91252c8c6E84B8987D1D10829','0'],{gasPrice:'4000000000',gasLimit:'150000'})
      console.log(onChainCall)
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
