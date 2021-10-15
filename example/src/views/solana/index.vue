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
import * as a from "./bundle.js";

import { Loading } from "element-ui";
import ERC20 from "../../utils/abis/ERC20-ABI.json";

export default {
  name: "web3Index",
  data() {
    return {
      actionsIn: null,
      LoadingIn: null,
    };
  },
  components: {},
  mounted() {
    let actionIn = a.Actions;
    this.actionsIn = new actionIn();
  },
  computed: {},

  methods: {
    async init() {
      console.log(await this.actionsIn.init());
      let link = await this.actionsIn.init();
      this.$alert(link, "Result", {
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
    async getBalance() {
      let Balance = await this.actionsIn.actions.getBalance(
        "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU"
      );
      console.log(Balance);
      this.$alert(Balance, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getBlock() {
      let Block = await this.actionsIn.actions.getBlock(9603492);
      this.$alert(Block, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getBlockNumber() {
      let BlockNumber = await this.actionsIn.actions.getBlockNumber();
      console.log(BlockNumber);
      this.$alert(BlockNumber, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getTransaction() {
      let Transaction = await this.actionsIn.actions.getTransaction(
        "5CgLYCuDbLZQnraR8jrSYQGetwyYLNGcnckgw3ukbuSeujCwDp1wW7XULMqoQEd5eYNyeoGMV56WvjrZVmKVQbT"
      );
      console.log(Transaction);
      this.$alert(Transaction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async getTransactionCount() {
      let TransactionCount = await this.actionsIn.actions.getTransactionCount();
      console.log(TransactionCount);
      this.$alert(TransactionCount, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    sendSignedTransaction() {
      this.loadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .sendSignedTransaction({
          from: "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU",
          to: "9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF",
          amount: 10,
        })
        .then((res) => {
          console.log(res);
          this.loadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "确定",
            callback: (action) => {},
          });
        })
        .catch(() => {
          this.loadingIn.close();
        });
    },
    async signWithWallet() {
      let sign = await this.actionsIn.actions.signWithWallet(
        "utf8",
        "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU"
      );
      console.log(sign);
      this.$alert(sign, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signWithPrivateKey() {
      let sign = await this.actionsIn.actions.signWithPrivateKey(
        "3",
        "4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890"
      );
      console.log(sign);
      this.$alert(sign, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signTransaction() {
      let Signtranction = await this.actionsIn.actions.signTransaction(
        "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU"
      );
      console.log(Signtranction);
      this.$alert(Signtranction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async signTransactionPrivateKey() {
      let Signtranction =
        await this.actionsIn.actions.signTransactionPrivateKey(
          {
            from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
            gas: "100000",
            value: "1",
          },
          "4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890"
        );
      console.log(Signtranction);
      this.$alert(Signtranction, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    sendTransaction() {
      this.loadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .sendTransaction({
          from: "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU",
          to: "9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF",
          amount: 10,
        })
        .then((res) => {
          console.log(res);
          this.loadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "确定",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.loadingIn.close();
        });
    },
    async loadContract() {
      let abis = await this.actionsIn.contract.loadContract(
        ERC20,
        "0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513"
      );
      this.$alert(abis, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async link() {
      await this.actionsIn.connector.link();
    },
    async offChainCall() {
      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513"
      );
      let offChainCall = await this.actionsIn.contract.offChainCall(
        Contract.data,
        "name",
        [],
        "",
        ""
      );
      console.log(offChainCall);
      this.$alert(offChainCall, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
    async onChainCall() {
      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513"
      );
      let onChainCall = await this.actionsIn.contract.onChainCall(
        Contract.data,
        "approve",
        ["0x5B6C6709d1000db91252c8c6E84B8987D1D10829", "0"],
        { gasPrice: "4000000000", gasLimit: "150000" }
      );
      console.log(onChainCall);
      this.$alert(onChainCall, "Result", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
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
