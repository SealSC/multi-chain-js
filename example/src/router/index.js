import Vue from "vue";
import Router from "vue-router";

const _import = file => () => import("@/views/" + file + ".vue");
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    component: _import("main/index")
  },
  {
    path: "/web3-SDK-Dome",
    name: "web3-SDK-Dome",
    component: _import("web3/index")
  },
];

const router = new Router({
  mode: "hash",
  routes: routes
});

export default router;
