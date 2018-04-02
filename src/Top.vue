<template>
  <div id="Top">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click.native="change(selected)">1～50</mt-tab-item>
      <mt-tab-item id="2" @click.native="change(selected)">51～100</mt-tab-item>
      <mt-tab-item id="3" @click.native="change(selected)">101～150</mt-tab-item>
      <mt-tab-item id="4" @click.native="change(selected)">151～200</mt-tab-item>
      <mt-tab-item id="5" @click.native="change(selected)">201～250</mt-tab-item>
    </mt-navbar>
    <div class="screen" ref="screen" @scroll="loadMore($event)">
      <ul ref="ul">
        <li v-for="(item,index) in list">
          <div class="info">
            <p><span class="rank">NO.{{index+start+1}}</span>
              <span class="name">{{item.title}}</span> / {{item.year}}</p>

            <p>评分：{{item.rating.average}}</p>

            <p>{{item.collect_count}}人看过</p>

            <p>类型：{{item.genres|join}}</p>

            <p class="directors">导演：{{item.directors|directorsJoin}}</p>
          </div>
          <img :src="item.images.large" :alt="item.alt"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  import Vue from 'vue'
  import { Search } from 'mint-ui';
  import Jsonp from './common/jsonp.js'
  Vue.component(Search.name, Search);
  export default {
    data () {
    return {
      selected:2,
      value:'搜索',
      list:[],
      start:0,

    }
  },
  methods:{
    getHot(start){
      Jsonp('https://api.douban.com/v2/movie/top250',{start:start,count:50},function(data){
          this.list=data.subjects
        }.bind(this)
      )
    },change(val){
     this.start=(val-1)*50;
      this.getHot(this.start)
    },
  },

  mounted (){
    this.getHot(this.start);
  }
  }
</script>

<style scoped>
  #hot{
    height: 100%;
  }
  .screen{
    overflow-y: auto;
    height: 100%;
  }
  ul{
    background: #fbf9fe;
    overflow: hidden;
  }
  li{
    border: 1px solid #e5e4e5;
    border-radius: 5px;
    background: #fff;
    margin: 15px 10px 0;
    overflow: hidden;
  }
  img{
    width: 92px;
    height: 128px;
    display: block;
    float:right ;
    padding: 10px;
  }
  .info{
    float: left;
    padding: 10px 0 10px 10px;

  }
  p{
    line-height: 30px;
  }
  .name{
    font-weight: 700;
    font-size: 16px;
  }
  .rank{
    display: inline-block;
    width: 45px;
    height: 30px;
    background: #008040;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
  }
  .directors{
    width: 230px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }
</style>
