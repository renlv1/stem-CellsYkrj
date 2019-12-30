<template>
  <div class="header-wrap" :class="{'active': smallNav,'active2': selectShow,'active3': headColor}">
    <div class="header wrap header-pc">
      <router-link tag="div" class="logo-box" to="/product">
        <img v-if="$route.path === '/downLoad' && !smallNav" src="~@img/common/3-LOGO.png" alt="">
        <img v-else-if="smallNav" src="~@img/common/selcet-logo.png" alt="">
        <img v-else src="~@img/common/0-LOGO.png" alt="">
      </router-link>
      <div class="head-nav">
        <router-link tag="li" onselectstart="return false;" excat :to="item.path" class="nav-li" v-for="(item,index) in $t('common.navData')" :key="index">{{item.name}}</router-link>
        <!--<li class="switch-lang" :class="{'downLoad': `${isPC && $route.path === '/downLoad' ? isDownLoad === true : ''} `}">-->
        <li class="switch-lang" onselectstart="return false;">
          <!--<span class="lang" :class="{active: $lang === 'en', active1: `${isPC && $route.path === '/downLoad' ? isDownLoad === true : ''} `}" @click="switchLang('EN')">EN</span>-->
          <span class="lang" :class="{active: $lang === 'en'}" @click="switchLang('EN')">EN</span>
          <span class="lang" style="margin: 0 5px">/</span>
          <!--<span class="lang" :class="{active: $lang === 'cn', active1: `${isPC && $route.path === '/downLoad' ? isDownLoad === true : ''} `}" @click="switchLang('CN')">CN</span>-->
          <span class="lang" :class="{active: $lang === 'cn'}" @click="switchLang('CN')">CN</span>
        </li>
      </div>
    </div>
    <!-- 移动端-->
    <div class="mobile-header">
      <router-link tag="div" class="logo-box" to="/product">
        <img v-if="smallNav" src="~@img/common/top-logo.png" alt="">
        <img v-else src="~@img/common/logo.png" alt="">
      </router-link>
      <div class="menu-icon" @click.stop="mobileRouteFn">
        <div class="icon" :class="{'active': selectShow}"></div>
      </div>
      <!--'active2': smallNav-->
      <div class="select" :class="{'active': selectShow}">
        <div class="li-nav" @click="selectShow = false">
          <router-link tag="li" excat :to="item.path" class="nav-li" v-for="(item,index) in $t('common.navData')" :key="index">{{item.name}}</router-link>
        </div>
        <li class="switch-lang">
          <span class="lang" :class="{active: $lang === 'en'}" @click="switchLang('EN')">EN</span>
          <span>/</span>
          <span class="lang" :class="{active: $lang === 'cn'}" @click="switchLang('CN')">CN</span>
        </li>
      </div>
    </div>
    <div class="return-top" v-show="smallNav" @click="returnTop"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPC: window.innerWidth > 1200,
      smallNav: false,
      selectShow: false,
      headColor: false,
      isDownLoad: false
    }
  },
  created () {
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    returnTop () {
      let currentScroll = this.getScollTop()
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.returnTop)
        window.scrollTo(0, currentScroll - (currentScroll / 4))
      }
    },
    getScollTop () {
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    scroll () {
      this.selectShow = false
      if (this.getScollTop() >= 900) {
        this.headColor = true
      } else {
        this.headColor = false
      }
      if (this.getScollTop() < 10) {
        this.smallNav = false
      } else {
        this.smallNav = true
      }
    },
    mobileRouteFn () {
      this.selectShow = !this.selectShow
    },
    switchLang (lang) {
      window.localStorage.setItem('stemLang', lang)
      window.location.reload()
    }
  },
  destroyed () {
    this.defLang()
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="less" scoped>
  .header-wrap{
    font-size: 18px;
    color: rgba(255,255,255,.7);
    position: fixed;
    width: 100%;
    height: 80px;
    line-height: 80px;
    left: 0;
    top: 0;
    z-index: 999;
    padding: 0 60px;
    background-color: rgba(0,0,0, 0);
    transition: all .3s linear;
    &.active{
      background-color: rgba(47, 49, 70, 0.97);
    }
    &.active2{
      box-shadow: 0 1px 2px rgba(255,255,255, .08);
    }
    /*&.active3{
      background-color: rgba(0,0,0, .6);
    }*/
    @media screen and (max-width: 1200px){
      padding: 0 20px;
      height: 45px;
      line-height: 45px;
    }
    .header{
      display: flex;
      align-items: center;
      transition: .3s;
      margin: 0 auto;
      .logo-box{
        white-space: nowrap;
        width: 160px;
        height: 50px;
        cursor: pointer;
        img{
          width: 100%;
        }
      }
      .head-nav{
        margin: 0 auto;
        height: 80px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        .en &{
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .nav-li{
          -moz-user-select:none; /*火狐*/
          -webkit-user-select:none; /*webkit浏览器*/
          -ms-user-select:none; /*IE10*/
          -khtml-user-select:none; /*早期浏览器*/
          user-select:none;
          flex: 1;
          height: 72px;
          cursor: pointer;
          position: relative;
          border-bottom: 0px solid #000;
          transition: 0.2s all linear;
          &:before {
            display: inline-block;
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform-origin: center;
            transform: translate(-50%, 0) scaleX(0);
            transition: transform .3s linear;
          }
          .en &{
            flex: none;
            width: auto;
            text-align: center;
          }
          &:nth-child(2){
            margin: 0 100px;
            .en & {
              margin: 0 40px;
            }
          }
          &:hover{
            color: rgba(255,255,255,1);
          }
          &.is-active{
            color: rgba(255,255,255, 1);
            position: relative;
            width: 100%;
            height: 72px;
            transition: width .2s linear;
            .en & {
              width: auto;
            }
            &::before {
              transform: translate(-50%, 0) scaleX(1);
            }
          }
        }
        .switch-lang{
          margin-left: 100px;
          display: flex;
          align-items: flex-end;
          &.downLoad{
            color: rgba(0,0,0,1);
          }
          .lang{
            -moz-user-select:none; /*火狐*/
            -webkit-user-select:none; /*webkit浏览器*/
            -ms-user-select:none; /*IE10*/
            -khtml-user-select:none; /*早期浏览器*/
            user-select:none;
            cursor: pointer;
            display: inline-block;
            height: 72px;
            &.active{
              color: rgba(255,255,255,1);
            }
            &.active1{
              color: rgba(0,0,0,.6);
            }
          }
        }
      }
    }
    .header-pc{
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    .mobile-header{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      @media screen and (min-width: 1200px) {
        display: none;
      }
      .logo-box{
        width: 96px;
        height: 30px;
        img{
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .menu-icon{
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .icon{
          width: 18px;
          height: 18px;
          background: url("../assets/img/common/menu-icon.svg")no-repeat center;
          background-size: contain;
          &.active{
            background: url("../assets/img/common/close.svg")no-repeat center;
            background-size: contain;
          }
        }
      }
      .select{
        width: 90px;
        background-color: rgba(255, 255, 255, 1);
        height: 0;
        border-radius: 4px;
        color: rgba(0,0,0,1);
        position: absolute;
        right: 0;
        top: 45px;
        z-index: 90;
        text-align: center;
        overflow: hidden;
        font-size: 14px;
        //box-shadow: 0 0 4px rgba(255, 255, 255, .2);
        box-shadow:0 1px 4px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.1) inset;
        transition: height .3s linear;
        .en &{
          width: 134px;
        }
        &.active{
          height: 165px;
        }
        &.active2{
          background-color: rgba(0, 0, 0, .34);
        }
        .nav-li{
          line-height: 40px;
          &.is-active{
            color: rgba(80,140,255,1);
          }
        }
        .switch-lang{
          display: flex;
          align-items: center;
          justify-content: center;
          .lang{
            flex: 1;
            &.active{
              color: rgba(80,140,255,1);
            }
            &:nth-child(1){
              text-align: right;
              padding-right: 7px;
            }
            &:nth-child(3){
              text-align: left;
              padding-left: 7px;
            }
          }
        }
      }
    }
    .return-top{
      position: fixed;
      width: 50px;
      height: 50px;
      right: 40px;
      bottom: 40px;
      background-color: rgba(47, 49, 70, 0.97);
      cursor: pointer;
      opacity: .5;
      transition: .3s;
      &:before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-left: 2px solid #fff;
        border-top: 2px solid #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-30%) rotate(45deg);
      }
      &:hover{
        opacity: 1;
      }
      @media screen and (max-width: 1200px) {
        transform: scale(.6);
        transform-origin: right bottom;
        right: 20px;
      }
    }
  }
</style>
