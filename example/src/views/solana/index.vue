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
import * as a from "@sealsc/solana-wrapper";
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
      this.LoadingIn = Loading.service({ fullscreen: true });
      let link = await this.actionsIn.init();
      this.LoadingIn.close();
      this.$alert(link, "Result", {
        confirmButtonText: "Sure",
        callback: (action) => {},
      });
    },
    getAccount() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .getAccount()
        .then((result) => {
          this.LoadingIn.close();
          this.$alert(result, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    getBalance() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .getBalance("BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU")
        .then((result) => {
          this.LoadingIn.close();
          this.$alert(result, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    getBlock() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .getBlock(9603492)
        .then((result) => {
          this.LoadingIn.close();
          this.$alert(result, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    async getBlockNumber() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      let BlockNumber = await this.actionsIn.actions
        .getBlockNumber()
        .then((result) => {
          this.LoadingIn.close();
          this.$alert(result, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    getTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .getTransaction(
          "5CgLYCuDbLZQnraR8jrSYQGetwyYLNGcnckgw3ukbuSeujCwDp1wW7XULMqoQEd5eYNyeoGMV56WvjrZVmKVQbT"
        )
        .then((result) => {
          this.LoadingIn.close();
          this.$alert(result, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    getTransactionCount() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .getTransactionCount()
        .then((result) => {
          this.LoadingIn.close();
          this.$alert(result, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    sendSignedTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true });

      this.actionsIn.actions
        .sendSignedTransaction({
          from: "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU",
          to: "9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF",
          amount: 10,
        })
        .then((res) => {
          console.log(res);

          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    signWithWallet() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .signWithWallet("utf8", "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU")
        .then((res) => {
          console.log(res);
          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    signWithPrivateKey() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .signWithPrivateKey(
          "3",
          "4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890"
        )
        .then((res) => {
          console.log(res);
          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    async signTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      let Signtranction = await this.actionsIn.actions
        .signTransaction("BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU")
        .then((res) => {
          console.log(res);
          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    async signTransactionPrivateKey() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      this.actionsIn.actions
        .signTransactionPrivateKey(
          {
            from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
            gas: "100000",
            value: "1",
          },
          "4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890"
        )
        .then((res) => {
          console.log(res);
          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    sendTransaction() {
      this.LoadingIn = Loading.service({ fullscreen: true });

      this.actionsIn.actions
        .sendTransaction({
          from: "BTYUoerzScoXFymLWTowgEVF9Yr2ifpf3z3VRgJUMpNU",
          to: "9e1iJpWBYmMJ8GzYBFnNtSoTQ7EHUGWFapnixvAKHKPF",
          amount: 10,
        })
        .then((res) => {
          console.log(res);

          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",

            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    async loadContract() {
      this.LoadingIn = Loading.service({ fullscreen: true });

      let abis = await this.actionsIn.contract.loadContract(
        ERC20,
        "0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513"
      );

      this.LoadingIn.close();
      this.$alert(abis, "Result", {
        confirmButtonText: "Sure",

        callback: (action) => {},
      });
    },
    async link() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      let links = await this.actionsIn.connector.link();
      this.LoadingIn.close();
      this.$alert(links, "Result", {
        confirmButtonText: "Sure",
        callback: (action) => {},
      });
    },
    async offChainCall() {
      this.LoadingIn = Loading.service({ fullscreen: true });

      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513"
      );

      this.actionsIn.contract
        .offChainCall(Contract.data, "name", [], "", "")
        .then((res) => {
          console.log(res);
          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        });
    },
    async onChainCall() {
      this.LoadingIn = Loading.service({ fullscreen: true });
      let Contract = await this.actionsIn.contract.loadContract(
        ERC20,
        "0x98445c06f7D3D9a6EEA7C6e8E96d4a7aEF7E9513"
      );
      let onChainCall = await this.actionsIn.contract
        .onChainCall(
          Contract.data,
          "approve",
          ["0x5B6C6709d1000db91252c8c6E84B8987D1D10829", "0"],
          { gasPrice: "4000000000", gasLimit: "150000" }
        )
        .then((res) => {
          console.log(res);
          this.LoadingIn.close();
          this.$alert(res, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
        })
        .catch((error) => {
          this.LoadingIn.close();
          this.$alert(error, "Result", {
            confirmButtonText: "Sure",
            callback: (action) => {},
          });
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
