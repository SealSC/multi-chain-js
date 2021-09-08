import Vue from 'vue'
import Vuex from 'vuex'
import wallet from './modules/wallet'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    namespaced:true,
    wallet
  }
});

export default store;
