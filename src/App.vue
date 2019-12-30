<template>
  <div id="app" :class="`${lang.toLowerCase()}${isPC ? ' pc' : ''}`">
    <v-header></v-header>
<!--    <div class="scroll" @click="toTop"><img width="50" height="50" src="./assets/img/top.png"></div>-->
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isPC: window.innerWidth > 1200,
      lang: window.localStorage.getItem('stemLang') || ''
    }
  },
  created() {},
  mounted() {
  },
  components: {
    vHeader: resolve => require(['@/components/header.vue'], resolve),
    vFooter: resolve => require(['@/components/footer.vue'], resolve)
  },
  methods: {
    toTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
};
</script>

<style lang="stylus">
  @import "assets/css/reset.css";
  @import "assets/css/banner.styl";
  #app{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>


