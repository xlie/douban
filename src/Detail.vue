<template>
  <div id="detail" v-if="detail">
    <header> <span @click="back"><</span>豆瓣电影</header>
    <div class="imgBox">
      <img :src='detail.images.large' alt=""/>
    </div>
    <div class="info border-bottom">
      <p class="name"><span class="title">{{detail.title}}</span> {{detail.year}}</p>
      <p>又名：{{detail.aka|join}}</p>
      <p>导演：{{detail.directors|directorsJoin}}</p>
      <p>主演：{{detail.casts|directorsJoin}}</p>
      <p>类型：{{detail.genres|join}}</p>
    </div>
    <div class="comment border-bottom">
      <p>豆瓣评分</p>
      <p class="average">{{detail.rating.average}}</p>
      <p>{{detail.ratings_count}}人评论&nbsp;&nbsp;
      {{detail.wish_count}}人想看&nbsp;&nbsp;
      {{detail.collect_count}}人看过</p>
    </div>
    <div class="summary border-bottom">
      <p>简介</p>
      <p>
        {{detail.summary}}
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Jsonp from './common/jsonp.js'
  export default {
    data () {
    return {
        id:'',
        detail:''
    }
  },
  methods:{
    loadMore(ev) {

    },
    getHot(start){
      Jsonp('https://api.douban.com/v2/movie/subject/'+start,{},function(data){
          this.detail=data;
        }.bind(this)
      )
    },
    back(){
      this.$router.go(-1)
    }
  },
  mounted (){
     this.id=this.$route.query.id;
     this.getHot(this.id)

  }

  }
</script>

<style scoped>
  #detail{
  }
  header{
    position: fixed;
    width: 100%;
  }
  header span{
    float: left;
    font-family: "宋体";
    font-size: 20px;
    padding-left: 10px;
  }
  .imgBox{
    padding: 60px 0 20px;
    background: #977963;
  }
  img{
    width: 160px;
    height: 230px;
    display: block;
    margin: 0 auto;
  }
  .border-bottom{
    background: #fbf9fe;
    border-bottom: 1px solid #e3e2e3;
    color: #444;
    padding: 0 10px;
  }
  .name{
    line-height: 46px;
  }
  .title,.average{
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
  p{
    line-height: 30px;
  }
  .info P{
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }

</style>

