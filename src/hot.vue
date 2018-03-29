<template>
  <div id="hot">
      <mt-search
        v-model="value"
        placeholder="搜索">
      </mt-search>
    <!--<ul-->
      <!--v-infinite-scroll="loadMore"-->
      <!--infinite-scroll-disabled="loading"-->
      <!--infinite-scroll-distance="10">-->
      <!--<li v-for="item in list">{{ item }}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Search } from 'mint-ui';
//  import { InfiniteScroll } from 'mint-ui';
//  Vue.use(InfiniteScroll);

  Vue.component(Search.name, Search);
  export default {
    data () {
    return {
      value:'搜索',
    }
  },
  methods:{

   }
  }
</script>

<style scoped>
  .mint-search {
    height: 100px;
  }
</style>
