import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, PullRefresh, Toast, List, Card } from 'vant'

Vue.config.productionTip = false

// 全局注册vant组件
Vue.use(Button)
Vue.use(PullRefresh)
Vue.use(Toast)
Vue.use(List)
Vue.use(Card)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
