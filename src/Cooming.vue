<template>
  <div id="comming">
    <div class="screen" ref="screen" @scroll="loadMore($event)">
      <ul ref="ul">
        <router-link :to="{path:'/detail',query:{id:item.id}}" v-for="item in list">
          <li >
            <img :src="item.images.large" :alt="item.alt"/>

            <div class="info">
              <p class="name">{{item.title}}</p>
              <p>评分：{{item.rating.average |average}}</p>
            </div>
          </li>
        </router-link>
      </ul>
      <mt-spinner type="fading-circle" v-show="loading"></mt-spinner>

      <p v-show="end" class="no-more">没有更多数据</p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Spinner } from 'mint-ui';
  import Jsonp from './common/jsonp.js'
  Vue.component(Spinner.name, Spinner);
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
      Jsonp('https://api.douban.com/v2/movie/coming_soon',{start:start,count:10},function(data){
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
  #comming{
    height: 100%;
  }
  .screen{
    overflow-y: auto;
    height: 100%;
  }
  ul{

    background: #fbf9fe;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  li{
    background: #fff;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px 0;
    float: left;
    box-shadow: 0 0 5px #ebeaee ;
    border-radius: 5px;
    color: #333;
  }
  img{
    width: 135px;
    height: 194px;
    display: block;
    margin: 0 auto;
  }
  p{
    text-align: center;
    padding-top: 10px;
    font-size: 12px;

  }

  .name{
    width: 135px;
    height: 14px;
    font-weight: 700;
    font-size: 14px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }
  .no-more{
    text-align: center;
  }
  a{
    flex: 0;
  }


</style>

