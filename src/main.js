import Vue from 'vue'
import App from './App.vue'

import calculator from './index.js'

Vue.use(calculator);

new Vue({
  render: h => h(App),
}).$mount('#app')
