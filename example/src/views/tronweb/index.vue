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
    return {};
  },
  components: {},
  async mounted() {
    let actionIn = a.Actions;
    this.actionsIn = new actionIn();
  },
  computed: {},

  methods: {
    async init() {
      let init = await this.actionsIn.init();
      this.$alert(init, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getAccount() {
      let Accounts = await this.actionsIn.actions.getAccount();
      console.log(Accounts);
      this.$alert(Accounts, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getBlock() {
      let Block = await this.actionsIn.actions.getBlock(17584567);
      this.$alert(Block, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getBlockNumber() {
      let BlockNumber = await this.actionsIn.actions.getBlockNumber(123);
      this.$alert(BlockNumber, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getTransaction() {
      let transaction = await this.actionsIn.actions.getTransaction(
        "950ab60dc678315dfccb3dfa81603133ef790d907395adf5d29e9531bf49a3fa"
      );
      this.$alert(transaction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getTransactionCount() {
      let getTransactionCount =
        await this.actionsIn.actions.getTransactionCount();
      this.$alert(getTransactionCount, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async sendSignedTransaction() {
      let sendSignedTransaction =
        await this.actionsIn.actions.sendSignedTransaction();
      this.$alert(sendSignedTransaction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signWithWallet() {
      let signWithWallet = await this.actionsIn.actions.signWithWallet();
      this.$alert(signWithWallet, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signWithPrivateKey() {
      let signWithPrivateKey =
        await this.actionsIn.actions.signWithPrivateKey();
      this.$alert(signWithPrivateKey, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signTransaction() {
      let shouldSigntranction = await this.actionsIn.actions.signTransaction(
        {
          from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        },
        "0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      );
      this.$alert(shouldSigntranction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signTransactionPrivateKey() {
      let shouldSigntranctionPrivateKey =
        await this.actionsIn.actions.signTransaction(
          {
            from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
          },
          "0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
        );
      this.$alert(shouldSigntranctionPrivateKey, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async sendTransaction() {
      let shouldsendTranction = await this.actionsIn.actions.sendTransaction({
        address: "TLguFcSkjNgTnf8zWQJhNMofKHASRjmtqb",
        amount: 10,
      });
      this.$alert(shouldsendTranction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async loadContract() {
      let ContractIn = await this.actionsIn.contract.loadContract(
        ERC20,
        "TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS"
      );
      console.log(ContractIn, "Contract");
    },
    async link() {
      let link = await this.actionsIn.connector.link();
      this.$alert(link, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async offChainCall() {
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
      );
      Message.success({ duration: 3000, message: contractCall });
    },
    async onChainCall() {
      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS"
      );

      let onChainCall = await this.actionsIn.contract.onChainCall(
        Contract.data,
        "approve",
        ["TQaYBj9drxmoW7LfLnDDrvPnuj4zoZbaSS", "0"],
        {
          callValue: "1000000000",
          feeLimit: "140000",
        }
      );
      Message.success({ duration: 3000, message: onChainCall });
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
