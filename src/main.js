import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueCarousel from 'vue-carousel';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
