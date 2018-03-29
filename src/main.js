import Vue from 'vue'
import App from './App.vue'
import Hot from './hot.vue'
import VueRouter from 'vue-router'
(function(global) {
  function remChange() {
    document.documentElement.style.fontSize = 100 * document.documentElement.clientWidth / 750 + 'px';
    // document.getElementsByTagName("body")[0].style.height = document.documentElement.clientHeight +"px";
  }
  ;
  remChange();
  global.addEventListener('resize', remChange, false);
})(window);

Vue.use(VueRouter)
const routes=[{
  path:'/hot',component:Hot
}]
const router=new VueRouter({
  routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
