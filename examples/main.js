import Vue from 'vue';
import VueRouter from 'vue-router';
import fastclick from 'fastclick';
import './example.less';

Vue.config.debug = true;

Vue.use(VueRouter);

import routes from './router'
const router = new VueRouter({
  mode: 'hash',
  routes
});
router.beforeEach(({meta, path, name}, from, next) => {
  // 没有登录并且访问链接不在控制的权限内则跳转到登录页面（即非法路径访问）
  next()
})
import {Main} from './containers';
new Vue({
  el: '#container',
  router,
  render: h => h(Main),
})

// fastclick.attach(document.body);
