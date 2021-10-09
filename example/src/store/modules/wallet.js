// import Decimals from "decimal.js";
// import router from '../../router'
// import axios  from "../../utils/http"

export default {
  state: {
    showModal:false,
  },
  getters: {
    showModal: state => state.showModal
  },
  mutations: {
    updateShowModal(state,playload){
      state.showModal = playload
    }
  },
  actions: {
    
  }
};