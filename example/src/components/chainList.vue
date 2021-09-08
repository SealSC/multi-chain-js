<template>
  <div v-if="showModal">
    <div class="mask" v-if="showModal" @click="hideModal"></div>
    <div class="pop" v-if="showModal">
        <div class='popTitle'>Select Chain
          <i @click="hideModal">
            <img :src="'/static/control/close.png'" alt="">
          </i>
        </div>
        <div class='popText'></div>
        <div class="popBox">
          <div class="MetaMaskBtn" @click="toPage()">
            web3
            <div class='imgBox'>
              <!-- <img :src="'/static/login/metamask.png'" alt=""> -->
            </div>
          </div>
          <div class="WalletConnectBtn" @click="toPage()">
            tronweb
            <div class='imgBox'>
              <!-- <img :src="'/static/login/WalletConnect.png'" alt=""> -->
            </div>
          </div>
          <div class="WalletConnectBtn" @click="toPage()">
            polkadot
            <div class='imgBox'>
              <!-- <img :src="'/static/login/WalletConnect.png'" alt=""> -->
            </div>
          </div>
        </div>
    </div> 
  </div>
</template>

<script>
import { mapState ,mapActions ,mapGetters } from 'vuex'

export default {
  name:'LoginWallet',
  data(){
    return {
       
    }
  },
  components: {
    
  },
  computed:{
    ...mapState({
      showModal:state=>state.wallet.showModal,
    })
  },
  async mounted(){
    
  },
  methods:{
    hideModal(){
      this.$store.commit('updateShowModal',false)
    },
    toPage(){
      this.$store.commit('updateShowModal',false)
      this.$router.push({name:"web3-SDK-Dome"})
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/colors.scss";
@import "../styles/fonts.scss";
@import '../styles/_handle.scss';
 
.mask {
    background-color: #000000;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999
  }
  .pop {
    @include font_color("font_color3");
    position: fixed;
    top: 0;
    right:0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 570px;
    height:350px;
    z-index: 99999;
    @include background_color("navBackground");
    border-radius: 8px;
    border: 1px solid ;
    @include border_color("inputBorderColor");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .popTitle{
      @include font_color("font_color3");
      width: 80%;
      padding: 20px 0;
      text-align: center;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      line-height: 25px;
      border-bottom: 1px solid;
      @include border_color("loadingWalletBorderColor");
      i{
        float: right;
        cursor: pointer;
        font-size: 24px;
        @include font_color("font_color3");
      }
    }
    .popText{
      width:80%;
      @include font_color("font_color3");
      text-align: justify;
      padding: 16px 0;
      font-size: 12px;
      font-weight: 500;
      line-height: 27px;
      .textRed{
        @include font_color("font_color1");
      }
    }
     .popBox{
      @include font_color("font_color3");
      width: 80%;
      div{
        @include background_color("loadingWalletBackground");
        border-radius: 4px;
        border: 1px solid ;
        @include border_color("loadingWalletBorderColor");
        padding: 8px 24px ;
        margin-bottom: 16px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .imgBox{
          width: 44px;
          height: 44px;
          @include background_color("iconBackground");
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0;
          padding:0;
        }
      }
      .loadingBorder{
        border-radius: 30px;
      }
      .installMet{
         a{
            @include font_color("font_color3");
         }
      }
    }
  }


@media screen and (max-width: 900px){
    .pop{
        width: 80%;
        height: 70%;
        .popBox{
            div{
                padding: 10px;
            }
        } 
    }
}
</style>
