import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import rem from './common/rem'
import Loading from "./index"
Vue.use(Loading);
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
Vue.filter('join', function(val) {
    return val.join('/');
});
Vue.filter('directorsJoin', function(val) {
  var arr=[];
  val.forEach((val)=>{
    arr.push(val.name);
  })
  return arr.join('/');
});
