a<template>
  <div id="app">
    <header v-show="$route.path!='/detail'">豆瓣电影</header>

    <div class="content" ref="content">
      <transition :name="transitionName">
      <router-view ></router-view>
      </transition>
    </div>
    <div class="tabbar"  v-show="$route.path!='/detail'">
      <router-link to="/hot">
        <img  src="./assets/100x100.png">
        <span>正在上映</span>
      </router-link>
      <router-link to="/comming">
        <img  src="./assets/100x100.png">
        <span>即将上映</span>
      </router-link>
      <router-link to="/top">
        <img  src="./assets/100x100.png">
        <span>Top250</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import { Tabbar, TabItem } from 'mint-ui';
  import Vue from 'vue'
  import 'mint-ui/lib/style.css'
  import './css/reset.css'
  import './css/my-mint.css'
  Vue.component(Header.name, Header);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  mounted (){
    this.$nextTick(() => { this.$refs.content.style.height=window.screen.height-95+'px';})

  }
}
</script>

<style>
header{
  height: 40px;
  line-height: 40px;
  text-align: center;
  background:#35495e;
  color: #fff;
}
.mint-header.is-fixed{
  position: static;
}
  .mint-header-title{
    font-size: 16px;
  }
  #app{
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-flex-direction:column;
    -ms-flex-direction:column;
    flex-direction:column;
    width:100%;
    height:100%;
  }
  body,html{
    height: 100%;
  }
  .router-link-active{
    color:#17be16;
  }
  .content{
    -webkit-box-flex:1;
    -webkit-flex:1;
    -ms-flex:1;
    flex:1;
    width:100%;
    overflow-y: auto;
    height: 300px;
  }
  .tabbar{
    height: 55px;
    line-height: 55px;
    background-color: #f7f7f7;
    text-align: center;
    display: flex;
  }
  a{
    display: block;
    flex: 1;
  }
  img{
    width: 20px;
    height: 20px;

  }
.router {
  position: absolute;
  width: 100%;
  transition: all .5s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  transition: all .5s ease;
  opacity: 0;
}

.slide-left-leave-active,
.slide-right-enter {
  transition: all .5s ;
  opacity: 0;
}
</style>
