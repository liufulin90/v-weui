<template>
  <div id="app">
    <header>
      <span v-if="$route.path != '/'" @click="goback">&lt;返回</span>
    </header>
    <router-view transition="slide"></router-view>
  </div>
</template>

<script>
  import 'v-weui/less/weui.less';
  import { Icon } from 'v-weui';
  export default {
    name: 'app',
    mounted () {
    },
    components: {
      Icon
    },
    methods: {
      goback () {
        history.back()
      }
    }
  }
  // 这里是处理ios中对css active的不兼容问题
  document.addEventListener('touchstart', function () {});
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #app header {
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    text-align: left;
    text-indent: 20px;
    background-color: #63bd70;
    color: white;
    margin-bottom: 1rem;
  }
</style>
