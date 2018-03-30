<template>
  <div id="app">
    <mt-header fixed title="豆瓣电影"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item >
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/hot">正在上映</router-link>
      </mt-tab-item>
      <mt-tab-item >
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/comming">即将上映</router-link>
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/top">top250</router-link>
      </mt-tab-item>
    </mt-tabbar>
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
      msg: 'Welcome '
    }
  }
}
</script>

<style>
.mint-header{
  background:#35495e;
  color: #fff;
}
  .mint-header-title{
    font-size: 16px;
  }
  #app{
    padding-top: 40px;
  }
  body,html{
    height: 100%;
  }
  .router-link-active{
    color:#17be16;
  }
</style>
