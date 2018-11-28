import Vue from 'vue'
import App from './App'
import router from './router'

// Vue ローディング直後、この設定が同期されていることを確認してください
Vue.config.devtools = true;
// productionTip を false にすると、起動時の製品ヒント情報の出力を抑止します。
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //これが入ってなくて4日間ぐらい迷った
  render: h => h(App)
})
