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
        <div @click="signTransactionPrivateKey()">
          signTransactionPrivateKey
        </div>
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
import * as tronWebSdk from "../../utils/dist/tronweb-build.es";
import ERC20 from "../../utils/abis/ERC20-ABI.json"
// const tronWebSdk = require("../../utils/dist/tronweb-build.es")
export default {
  name: "tronwebIndex",
  data() {
    return {};
  },
  components: {},
  async mounted() {
    //  console.log(new tronWebSdk.Actions().actions(),"tronWebSdk")
    //  let aa = new tronWebSdk.Actions.actions
  },
  computed: {},

  methods: {
    async init() {
      let Action = await new tronWebSdk.Actions();
      let init = await Action.init();
    },
    async getAccount() {
      let Action = await new tronWebSdk.Actions();
      let shouldAccount = await Action.actions.getAccount(
        "TR4tZXQSn1L5DijAK2rDV2LCnXSgdwVJVF"
      );
    },
    async getBlock() {
      let Action = await new tronWebSdk.Actions();
      let Block = await Action.actions.getBlock(17584567);
    },
    async getBlockNumber() {
      let Action = await new tronWebSdk.Actions();
      let BlockNumber = await Action.actions.getBlockNumber(123);
      console.log(BlockNumber,"BlockNumber")
    },
    async getTransaction() {
      let Action = await new tronWebSdk.Actions();
      let transaction = await Action.actions.getTransaction('950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa');
      console.log(transaction,"transaction")
    },
    async getTransactionCount() {
      let Action = await new tronWebSdk.Actions();
      let getTransactionCount = await Action.actions.getTransactionCount();
      console.log(getTransactionCount,"getTransactionCounts")
    },
    async sendSignedTransaction() {
      let Action = await new tronWebSdk.Actions();
      let sendSignedTransaction = await Action.actions.sendSignedTransaction();
      console.log(sendSignedTransaction,"sendSignedTransaction")
    },
    async signWithWallet() {
      let Action = await new tronWebSdk.Actions();
      let signWithWallet = await Action.actions.signWithWallet();
      console.log(signWithWallet,"signWithWallet")
    },
    async signWithPrivateKey() {
      let Action = await new tronWebSdk.Actions();
      let signWithPrivateKey = await Action.actions.signWithPrivateKey();
      console.log(signWithPrivateKey,"signWithPrivateKey")
    },
    async signTransaction() {
       let Action = await new tronWebSdk.Actions();
      let shouldSigntranction = await Action.actions.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      console.log(shouldSigntranction,"shouldSigntranction")
    },
    async signTransactionPrivateKey() {
      let Action =  new tronWebSdk.Actions();
    let shouldSigntranction = await Action.actions.signTransaction({
      from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
    },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
    console.log(shouldSigntranction,"shouldSigntranction")

    },
    async sendTransaction() {
      let Action =  new tronWebSdk.Actions();
    let shouldsendTranction = await Action.actions.sendTransaction({
        address:"TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
        amount: 10
    });
    console.log(shouldsendTranction,"shouldsendTranction")
    },
    async loadContract() {
      let Action = new tronWebSdk.Actions();
    let ContractIn = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS')
    console.log(ContractIn,"ContractIn")
    },
    link() {

    },
    async offChainCall() {
      let Action = await new tronWebSdk.Actions()
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');

    let contractCall = await Action.contract.offChainCall(Contract.data, 'totalSupply', [], '', "")
    console.log(contractCall,"contractCall")
    },
    async onChainCall() {
      let Action = await new tronWebSdk.Actions()
    let Contract = await Action.actions.loadContract(ERC20, 'TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS');

    let onChainCall = await Action.contract.onChainCall(Contract.data, 'approve', ['TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS', '0'], {
      callValue: "1000000000",
      feeLimit: "140000",
  })
    console.log(onChainCall,"onChainCall")
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
