import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill' // 兼容旧浏览器
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import 'animate.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// import 'element-ui/lib/theme-chalk/index.css'
import { i18n } from './i18n/config'
// 引入nprogress
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css' // 这个样式必须引入

import axios from 'axios'
import api from './assets/js/api'

Vue.prototype.$fetch = api
Vue.config.productionTip = false

Vue.prototype.$utf16to8 = function (str) { // 二维码转码
  var out, i, len, c
  out = ''
  len = str.length
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i)
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    }
  }
  return out
}

let language = navigator.browserLanguage ? navigator.browserLanguage : navigator.language
// 获取浏览器配置语言 #括号内是个运算，运算过后赋值给lang，当?前的内容为true时把?后的值赋给lang，为False时把:后的值赋给lang
let langSub = language.substr(0, 2) // 获取lang字符串的前两位
let lan = String(langSub) // 默认为获取浏览器的语言
const lang = window.localStorage.getItem('stemLang') || lan
Vue.prototype.$lang = lang.toLowerCase()

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
