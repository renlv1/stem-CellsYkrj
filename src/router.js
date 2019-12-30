import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/*eslint-disable*/
export default new Router({
  linkActiveClass: 'is-active', /* 设置router-link 激活样式方法1 */
  routes: [
    { // 产品
      path: '/',
      redirect: '/product',
    },
    { // 产品
      path: '/product',
      name: 'product',
      component: resolve => require(['./views/product.vue'], resolve)
    },
    { // 下载
      path: '/downLoad',
      name: 'downLoad',
      component: resolve => require(['./views/downLoad.vue'], resolve)
    },
    { // 首页
      path: '/aboutUs',
      name: 'aboutUs',
      component: resolve => require(['./views/aboutUs.vue'], resolve)
    },
  ]
})
