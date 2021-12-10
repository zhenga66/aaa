import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import  './mock/xzgg'
import  './mock/zzjg'
import  './mock/glzd'
import  './mock/yjfj'
import  './mock/sop'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

