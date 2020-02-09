// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./rem";//rem
import store from "./store/index";//store
import Vant from 'vant';//vant
import 'vant/lib/index.css';//vant
Vue.config.productionTip = false
Vue.use(Vant);//vant
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//store
  components: { App },
  template: '<App/>'
})
