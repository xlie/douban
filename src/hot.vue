<template>
  <div id="hot">
    <div class="screen" ref="screen" @scroll="loadMore($event)">
      <ul ref="ul">
        <li v-for="item in list">
          <img :src="item.images.large" :alt="item.alt"/>

          <div class="info">
            <p><span class="name">{{item.title}}</span> / {{item.year}}</p>

            <p>评分：{{item.rating.average}}</p>

            <p>{{item.collect_count}}人看过</p>

            <p>类型：{{item.genres|join}}</p>

            <p>导演：{{item.directors|directorsJoin}}</p>
          </div>
        </li>
        <mt-spinner type="fading-circle" v-show="loading"></mt-spinner>
      </ul>

      <p v-show="end" class="no-more">没有更多数据</p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Search } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import { Spinner } from 'mint-ui';
  import Jsonp from './common/jsonp.js'
  Vue.use(InfiniteScroll);
  Vue.component(Spinner.name, Spinner);
  Vue.component(Search.name, Search);
  export default {
    data () {
    return {
      value:'搜索',
      loading:false,
      list:[],
      start:0,
      end:false
    }
  },
  methods:{
    loadMore(ev) {
      if(this.end){
        return
      }
      const screen=this.$refs.screen;
      const ul=this.$refs.ul;
      const lis=document.querySelectorAll('li');
      const lastTop=lis[lis.length-1].offsetTop;
      if(screen.offsetHeight+screen.scrollTop>=lastTop-10){
        if(!this.loading){
        this.loading = true;
        this.getHot(this.start);
        }
      }
  },
  getHot(start){
    Jsonp('https://api.douban.com/v2/movie/in_theaters',{start:start,count:10},function(data){
    this.list.length==0?this.list=data.subjects:[].push.apply(this.list,data.subjects);
        if(this.list.length==data.total){
          this.end=true;
           this.loading = false;
          return
        }
        this.loading = false;
        this.start+=10;

      }.bind(this)
  )
  }
   },
  mounted (){
//    this.$nextTick(() => { this.$refs.screen.style.height=window.screen.height-147+'px';})
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
    width: 135px;
    height: 194px;
    display: block;
    float: left;
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
  .no-more{
    text-align: center;
  }
</style>
