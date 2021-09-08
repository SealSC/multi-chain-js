import Vue from 'vue'
import router from "./router";
import store from "./store/index";
import App from './App.vue'
import i18n from "./lang";
import VueCookies from "vue-cookies";
import Tools from "./utils/tools";
import VueClipboard from 'vue-clipboard2'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './utils/http';

import "font-awesome/css/font-awesome.css";
import 'vue-loading-overlay/dist/vue-loading.css';
import "@/styles/index.scss"; // global css

Vue.use(Tools);
Vue.use(VueCookies);
Vue.use(VueClipboard)
Vue.use(ElementUI);
Vue.use({
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false;
Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
