import Vue from 'vue'
import VueRouter from 'vue-router'
import Hot from './Hot.vue'
import Comming from './Cooming.vue'
import Top from './Top.vue'




Vue.use(VueRouter)
const routes=[{
  path:'/hot',component:Hot
   },{
  path:'/comming',component:Comming
   },
  {
    path:'/top',component:Top
},
]
export default routes
