<template>
<div id="App">
  <Header/>
  <!-- 路由组件显示位置 -->
  <router-view/>
  <Footer v-show="$route.meta.show"/>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 派发一个action获取商品分类三级列表数据，放在此处可以只请求一次
    this.$store.dispatch('getCategoryList')
  }
}
</script>

<style>


</style>
