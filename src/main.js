import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: function ()
  {
    const user = localStorage.getItem('user');
    if (!!user)
    {
      const objectUser = JSON.parse(user);
      this.$store.dispatch('addHeader', objectUser);
    }
  },
  render: h => h(App)
}).$mount('#app')
