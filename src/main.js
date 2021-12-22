import Vue from 'vue'
import App from './App.vue'

import InputCalculator from './index.js'

Vue.use(InputCalculator);

new Vue({
  render: h => h(App),
}).$mount('#app')
