import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import rem from './common/rem'
const router=new VueRouter({
  routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
Vue.filter('average', function(val) {
  return val==0?'暂无评分':val
});
