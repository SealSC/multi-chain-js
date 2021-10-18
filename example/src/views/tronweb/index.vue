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
        <div @click="signTransactionPrivateKey()">
          signTransactionPrivateKey
        </div>
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
import { Loading, Message } from "element-ui";
import ERC20 from "../../utils/abis/ERC20-ABI.json";
import * as a from "@sealsc/tronweb-wrapper";
export default {
  name: "tronwebIndex",
  data() {
    return {
      LoadingIn: null,
    };
  },
  components: {},
  async mounted() {
    let actionIn = a.Actions;
    this.actionsIn = new actionIn();
  },
  computed: {},

  methods: {
    async init() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      let init = await this.actionsIn.init();
      this.LoadingIn.close()
      this.$alert(init, "Result", {
        confirmButtonText: "Sure",
        callback: (action) => {},
      });
    },
    getAccount() {
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
      this.actionsIn.actions.getBalance('TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH').then((result)=>{
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
    getBlock() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getBlock(17584567).then((result)=>{
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
    getBlockNumber() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getBlockNumber(123).then((result)=>{
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
    getTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getTransaction(
        "950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa"
      ).then((result)=>{
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
    async getTransactionCount() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.getTransactionCount().then((result)=>{
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
    async sendSignedTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.sendSignedTransaction().then((result)=>{
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
    signWithWallet() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signWithWallet().then((result)=>{
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
    signWithPrivateKey() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signWithPrivateKey().then((result)=>{
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
    signTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signTransaction(
        {
          from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        },
        "0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      ).then((result)=>{
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
    signTransactionPrivateKey() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.signTransaction(
          {
            from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
          },
          "0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
        ).then((result)=>{
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
    sendTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      this.actionsIn.actions.sendTransaction({
        address: "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
        amount: 10,
      }).then((result)=>{
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
    async loadContract() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      let ContractIn = await this.actionsIn.contract.loadContract(
        ERC20,
        "TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS"
      );
      this.LoadingIn.close()
      this.$alert('Print to the console', 'Result', {
        confirmButtonText: 'Sure',
        callback: action => {
        }
      });
      console.log(ContractIn, "Contract");
    },
    async link() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      let link = await this.actionsIn.connector.link();
      this.LoadingIn.close()
      this.$alert(link, "Result", {
        confirmButtonText: "Sure",
        callback: (action) => {},
      });
    },
    async offChainCall() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS"
      );

      let contractCall = await this.actionsIn.contract.offChainCall(
        Contract.data,
        "totalSupply",
        [],
        "",
        ""
      ).then((result)=>{
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
    async onChainCall() {
      this.LoadingIn = Loading.service({ fullscreen: true })
      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS"
      );
      this.actionsIn.contract.onChainCall(
        Contract.data,
        "approve",
        ["TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS", "0"],
        {
          callValue: "1000000000",
          feeLimit: "140000",
        }
      ).then((result)=>{
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
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";
.container-web3 {
  .container-web3-module {
    display: flex;
    span {
      font-size: 16px;
      font-weight: 500;
      display: inline-block;
      width: 8%;
      margin-top: 20px;
    }
    .container-web3-module-right {
      display: flex;
      // align-items: center;
      flex-flow: row wrap;
      width: 80%;
      div {
        width: 200px;
        height: 50px;
        background: #409eff;
        border-radius: 4px;
        line-height: 50px;
        text-align: center;
        margin: 20px 10px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 900px) {
}
</style>
