<template>
  <div id="comming">
    <mt-search
      v-model="value"
      placeholder="搜索">
    </mt-search>
   即将上映
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Search } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  Vue.use(InfiniteScroll);
  import { Spinner } from 'mint-ui';
  import Jsonp from './common/jsonp.js'
  Vue.component(Spinner.name, Spinner);
  Vue.component(Search.name, Search);
  export default {
    data () {
    return {
      value:'搜索',
      loading:false,
      list:[],
      start:0,
      end:true
    }
  },
  methods:{

  },
  }
</script>

<style scoped>


</style>
