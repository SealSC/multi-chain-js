import Vue from 'vue'
import router from "./router";
import store from "./store/index";
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import "@/styles/index.scss"; // global css

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: h => h(App),
}).$mount('#app')
