<template>
  <div class="product-name">
  <div class="wrapper-pc">
    <div class="product-banner">
      <div class="product-t" v-if="$lang === 'cn'">{{$t('product.text1')}}</div>
      <div class="product-en" v-if="$lang === 'en'">{{$t('product.text1')}}</div>
      <div class="product-c">{{$t('product.text2')}}</div>
      <div class="download" @click="$router.push({path: '/downLoad'})">{{$t('product.text3')}}</div>
    </div>
    <div class="main-cont" >
<!--      <div class="pull-img" ref="toprf"><img src="../assets/img/product/pull.svg"></div>-->
      <div class="first-wrap">
        <div class="first-bg" v-if="$lang === 'cn'">
        </div>
        <div class="first-bg-en" v-if="$lang === 'en'">
        </div>
        <div class="box-cont1 common-cont  wow fadeInLeft">
          <div class="first-box">
            <div class="message-icon"><img src="../assets/img/product/message.svg"></div>
            <div class="message-ti">{{$t('product.text4')}}</div>
            <div class="message-ct">{{$t('product.text5')}}</div>
          </div>
          <div class="first-box">
            <div class="message-icon"><img src="../assets/img/product/hot-icon.svg"></div>
            <div class="message-ti">{{$t('product.text6')}}</div>
            <div class="message-ct">{{$t('product.text7')}}</div>
          </div>
        </div>
        <div class="box-cont2 common-cont  wow fadeInRight">
          <div class="second-box">
            <div class="message-icon"><img src="../assets/img/product/news-icon.svg"></div>
            <div class="message-ti">{{$t('product.text8')}}</div>
            <div class="message-ct">{{$t('product.text9')}}</div>
          </div>
          <div class="second-box">
            <div class="message-icon"><img src="../assets/img/product/person-center.svg"></div>
            <div class="message-ti">{{$t('product.text10')}}</div>
            <div class="message-ct">{{$t('product.text11')}}</div>
          </div>
        </div>
      </div>
      <div class="cont-three wow fadeInUp">
        <div class="three-left">
          <div class="genesis-box"><img src="../assets/img/product/1-2-GENESIS.svg"></div>
          <div class="three-main">{{$t('product.text13')}}</div>
        </div>
        <div class="three-right"><img src="../assets/img/product/stemCells.png"></div>
      </div>
      <div class="cont-four">
        <div class="four-main  ">
          <ul class="wow fadeInLeft">
            <li class="li-one">
              <div class="img-box">
                <img src="../assets/img/product/copy.svg" class="no-actice">
                <img src="../assets/img/product/copy-hover.svg" class="actice">
                <div class="line"></div>
              </div>
              <div class="li-title">{{$t('product.text14')}}</div>
              <div class="li-cont">{{$t('product.text15')}}</div>
            </li>
            <li class="li-one">
              <div class="img-box">
                <img src="../assets/img/product/wanyong.svg" class="no-actice">
                <img src="../assets/img/product/wangyong-hover.svg" class="actice">
                <div class="line"></div>
              </div>
              <div class="li-title">{{$t('product.text16')}}</div>
              <div class="li-cont">{{$t('product.text17')}}</div>
            </li>
            <li class="li-one">
              <div class="img-box">
                <img src="../assets/img/product/zaisheng.svg" class="no-actice">
                <img src="../assets/img/product/zaisheng-hover.svg" class="actice">
                <div class="line"></div>
              </div>
              <div class="li-title">{{$t('product.text18')}}</div>
              <div class="li-cont">{{$t('product.text19')}}</div>
            </li>
            <li class="li-one">
              <div class="img-box">
                <img src="../assets/img/product/wuxian.svg" class="no-actice">
                <img src="../assets/img/product/wuxian-hover.svg" class="actice">
              </div>
              <div class="li-title">{{$t('product.text20')}}</div>
              <div class="li-cont">{{$t('product.text21')}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="five-cont ">
        <div class="five-title">{{$t('product.text22')}}</div>
        <div class="code wow fadeInRight">
          <img src="../assets/img/product/code.png">
          <div class="qr-code ">
            <!--            <img src="../assets/img/mobile-product/hot-icon.svg">-->
            <div class="qrCodeBox" id="qrCodeBox"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper-mobile">
    <div class="product-mobile">
<!--      <v-header :logo = "logo"></v-header>-->
      <div class="banner-img">
        <img src="../assets/img/mobile-product/1-0-banner-BG.svg">
        <div class="banner-ti">
          <div class="product-t">{{$t('product.text1')}}</div>
          <div class="product-c">{{$t('product.text2')}}</div>
          <div class="download" @click="$router.push({path: '/downLoad'})">{{$t('product.text3')}}</div>
        </div>
      </div>
      <div class="one-box wow fadeInLeft">
        <div class="message-box" v-if="$lang === 'cn'"><img src="../assets/img/mobile-product/message-bg_cn.png"></div>
        <div class="message-box" v-if="$lang === 'en'"><img src="../assets/img/mobile-product/message-bg_en.png"></div>
        <div class="message-cont">
          <div class="message-icon"><img src="../assets/img/mobile-product/message.svg"></div>
          <div class="message-ti">{{$t('product.text4')}}</div>
          <div class="message-ct">{{$t('product.text5')}}</div>
        </div>
      </div>
      <div class="one-box two-box  wow fadeInRight">
        <div class="message-cont">
          <div class="message-icon"><img src="../assets/img/mobile-product/hot-icon.svg"></div>
          <div class="message-ti">{{$t('product.text6')}}</div>
          <div class="message-ct">{{$t('product.text7')}}</div>
        </div>
        <div class="message-box"  v-if="$lang === 'cn'"><img src="../assets/img/mobile-product/hot-bg_cn.svg"></div>
        <div class="message-box"  v-if="$lang === 'en'"><img src="../assets/img/mobile-product/hot-bg_en.png"></div>
      </div>
      <div class="one-box wow fadeInLeft">
        <div class="message-box" v-if="$lang === 'cn'"><img src="../assets/img/mobile-product/news-bg_cn.svg"></div>
        <div class="message-box" v-if="$lang === 'en'"><img src="../assets/img/mobile-product/news-bg_en.png"></div>
        <div class="message-cont">
          <div class="message-icon"><img src="../assets/img/mobile-product/news.svg"></div>
          <div class="message-ti">{{$t('product.text8')}}</div>
          <div class="message-ct">{{$t('product.text9')}}</div>
        </div>
      </div>
      <div class="one-box two-box four-box wow fadeInRight">
        <div class="message-cont last-cont">
          <div class="message-icon"><img src="../assets/img/mobile-product/person-center.svg"></div>
          <div class="message-ti">{{$t('product.text10')}}</div>
          <div class="message-ct">{{$t('product.text11')}}</div>
        </div>
        <div class="message-box" v-if="$lang === 'cn'"><img src="../assets/img/mobile-product/center_cn.svg"></div>
        <div class="message-box"  v-if="$lang === 'en'"><img src="../assets/img/mobile-product/center_en.png"></div>
      </div>
      <div class="cont-two">
        <div class="first-img  wow fadeInUp">
          <img src="../assets/img/mobile-product/xibao.svg">
        </div>
        <div class="genesis-box  wow fadeInUp"><img src="../assets/img/mobile-product/1-2-GENESIS.svg"></div>
        <div class="three-main wow fadeInUp">{{$t('product.text13')}}</div>
        <ul class="mobile-ul  wow fadeInUp">
          <li class="li-one">
            <div class="img-box">
              <img src="../assets/img/mobile-product/copy.svg" class="no-actice">
            </div>
            <div class="li-title">{{$t('product.text14')}}</div>
            <div class="li-cont">{{$t('product.text15')}}</div>
          </li>
          <li class="li-one">
            <div class="img-box">
              <img src="../assets/img/mobile-product/wanyong.svg" class="no-actice">
            </div>
            <div class="li-title">{{$t('product.text16')}}</div>
            <div class="li-cont">{{$t('product.text17')}}</div>
          </li>
          <li class="li-one li-top">
            <div class="img-box">
              <img src="../assets/img/mobile-product/zaisheng.svg" class="no-actice">
            </div>
            <div class="li-title">{{$t('product.text18')}}</div>
            <div class="li-cont">{{$t('product.text19')}}</div>
          </li>
          <li class="li-one li-top">
            <div class="img-box">
              <img src="../assets/img/mobile-product/wuxian.svg" class="no-actice">
            </div>
            <div class="li-title" v-if="$lang === 'cn'">{{$t('product.text20')}}</div>
            <div class="li-title li-en" v-if="$lang === 'en'">{{$t('product.text20')}}</div>
            <div class="li-cont">{{$t('product.text21')}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!--<h1>dddd</h1>-->
    <!--<h1>dddd</h1>-->
    <h1>ddd</h1>
    <div class="download-box">
      <div class="download-img  wow fadeInUp">
        <img src="../assets/img/mobile-product/1-3-BG.png">
        <div class="five-title">{{$t('product.text22')}}</div>
        <div class="code"><img src="../assets/img/mobile-product/code.svg"></div>
        <div class="code"> <div class="qrCodeBox" id="qrCodeBox2"></div></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {WOW} from 'wowjs'
  import $ from 'jquery'
  import '../assets/js/jquery.qrcode.min'
  export default {
    // components: { vHeader: resolve => require(['@/components/header.vue'], resolve),
    // },
    name: "product",
    data() {
        return{
        logo: require('../assets/img/product/0-LOGO.svg'),
        isAndroid: Boolean,
        isiOS: Boolean,
        appUrl: '',
        appIos: '',
        appAnd: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        var wow = new WOW({
          live: false
        })
        wow.init()
      })
    },
    created() {
      var u = navigator.userAgent;
      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      this.getCode()
      this.getIos()
      this.getAnd()
      let isScan = this.$route.query.sao
      if (isScan) {
        if (this.isAndroid) {
          location.href = this.$route.query.appAnd
        }
        if (this.isiOS) {
          location.href = this.$route.query.appIos
        }
      }
    },
    methods: {
      gotoP() {
        let disTop = document.documentElement.scrollTop || document.body.scrollTop
        let tem = disTop
        let _this = this
        let timer = setInterval(function () {
          tem = tem + 350
          document.documentElement.scrollTop = tem
          if (tem >= _this.$refs.toprf.clientHeight - 70) {
            clearInterval(timer)
          }
        }, 10)
      },
      getIos() {
        this.$fetch.post('https://web.cellcytolog.com/user/version',{
          clientType:  1
        }).then(res => {
          if(res.status === "success") {
            this.appIos = res.data.appUrl
            this.showQrPopup()
          }
        })
      },
      getAnd() {
        this.$fetch.post('https://web.cellcytolog.com/user/version',{
          clientType:  4
        }).then(res => {
          if(res.status === "success") {
            this.appAnd = res.data.appUrl
            this.showQrPopup()
          }
        })
      },
      getCode() {
        let clientType
        if(this.isAndroid) {
          clientType = 4
        } else if (this.isiOS) {
          clientType = 1
        }
        this.$fetch.post('https://web.cellcytolog.com/user/version',{
          clientType:  clientType
        }).then(res => {
          if(res.status === "success") {
             this.appUrl = res.data.appUrl
              this.showQrPopup()
          }
        })
      },
      showQrPopup() {
        $('#qrCodeBox').html('')
        $('#qrCodeBox2').html('')
        let downloadUrl
        downloadUrl = this.$utf16to8(this.appUrl)
        $('#qrCodeBox').qrcode({
          render: 'canvas', //     table方式
          width: 200, //            宽度
          height: 200, //            高度
          text: `${window.location.href}?sao=1&appIos=${this.appIos}&appAnd=${this.appAnd}` //      任意内容
        })
        $('#qrCodeBox2').qrcode({
          render: 'canvas', //     table方式
          width: 100, //            宽度
          height: 100, //            高度
          text: downloadUrl //      任意内容
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .product-name
    overflow hidden
  .product-banner
    width 100%
    height 959px
    background-image url("../assets/img/product/1-0-banner-BG.png")
    background-repeat no-repeat
    background-size cover
    background-position center
    .product-t
      font-weight bold
      letter-spacing 20px
      padding-top 280px
      text-align center
      font-size 100px
      color #fff
    .product-en
      font-weight bold
      letter-spacing 2px
      padding-top 280px
      text-align center
      font-size 100px
      color #fff
    .product-c
      text-align center
      margin-top 200px
      /*padding-top 400px*/
      font-size 18px
      color #fff
    .download
      width 200px
      height 60px
      border-radius 30px
      background rgba(255,255,255,0)
      border 2px solid #fff
      color #fff
      cursor pointer
      margin 0 auto
      text-align center
      line-height 60px
      margin-top 40px
  .main-cont
    .first-wrap{
      position relative
      height 1000px
      width 1200px
      margin  0 auto
      display flex
      justify-content space-between
      .common-cont{
        margin-top 300px
      }
      .first-bg{
        position absolute
        left 230px
        width 1324px
        height 770px
        background-image url("../assets/img/product/message-bg.png")
        background-repeat no-repeat
        background-size cover
        background-position center
      }
      .first-bg-en{
        position absolute
        left 230px
        width 1324px
        height 770px
        background-image url("../assets/img/product/bg-EN.png")
        background-repeat no-repeat
        background-size cover
        background-position center
      }
      .first-box{
        width 385px
        height 295px
        background-image url("../assets/img/product/box-1.png")
        background-repeat no-repeat
        background-size cover
        background-position center
        position relative
        z-index 200
        display flex
        flex-direction column
        align-items center
        padding 40px 60px 40px 40px
        .message-ti{
          font-size  20px
          font-weight bold
          margin 20px 0
        }
        .message-ct{
          line-height 1.5
          font-size 14px
        }
      }
      .second-box{
        position relative
        z-index 200
        width 385px
        height 295px
        background-image url("../assets/img/product/box-2.png")
        background-repeat no-repeat
        background-size cover
        background-position center
        display flex
        flex-direction column
        align-items center
        padding 40px 40px 40px 60px
        .message-ti{
          font-size  20px
          font-weight bold
          margin 20px 0
        }
        .message-ct{
          line-height 1.5
          font-size 14px
        }
      }
    }
    .pull-img
      margin 34px auto 0
      width 33px
      img
        max-width 100%
    .cont-one
      display flex
      justify-content space-between
      padding-top 90px
      /*width 1200px*/
    .cont-two
      display flex
      justify-content space-between
      width 1100px
      /*margin  0 auto*/
      .message-box
        padding-top 100px
      .hot
        padding-top 150px
        border-bottom none
        margin 0 60px 0 0
      .message-cont
        width 340px
        /*background-image url("../assets/img/product/box-1.svg")*/
        /*background-repeat no-repeat*/
        /*background-size cover*/
        /*background-position center right*/
        height 250px
    .hot
      width 280px
      padding-left 60px
      display flex
      flex-direction column
      /*justify-content center*/
      align-items center
      margin 60px 60px 0 0
      border-bottom 1px solid rgba(221,221,221,.5)
      .message-ti
        font-weight bold
        margin 30px 0 20px
        font-size 20px
        color #000
      .message-ct
        font-size 14px
        color #000
    .message-cont
      margin-top 150px
      width 340px
      /*background-image url("../assets/img/product/box-1.svg")*/
      /*background-repeat no-repeat*/
      /*background-size cover*/
      /*background-position center right*/
      padding-top 150px
      display flex
      flex-direction column
      /*justify-content center*/
      align-items center
      .message-ti
        font-weight bold
        margin 30px 0 20px
        font-size 20px
        color #000
      .message-ct
        font-size 14px
        color #000
    .cont-three
      display flex
      justify-content center
      /*width 1200px*/
      /*margin 0 auto*/
      background #f6f9ff
      padding-bottom 100px
      .three-left
        margin-right 50px
        padding-top 180px
        .three-main
          width 700px
          margin-top 34px
          font-size 18px
          color #000
        .genesis-box
          .stem
            display inline-block
            margin-left 20px
            font-size 34px
            color #000
      .three-right
        padding-top 140px
    .cont-four
      background #f6f9ff
      @media (max-width: 1400px) {
        width 100%
        padding 0 10px
      }
      .four-main
        height 540px
        width 1200px
        margin 0 auto
        border-top 1px solid #508cff
        border-left 1px solid #508cff
        border-right 1px solid #508cff
        ul
          padding 110px 50px 0
          display flex
          justify-content space-between
          li
            cursor pointer
            width 280px
            display flex
            flex-direction column
            align-items center
            /*height 140px*/
            text-align center
            .img-box
              display flex
              align-items center
              position relative
              .line
                position absolute
                right -135px
                width 135px
                height 1px
                background #508cff
            .li-title
              font-weight bold
              margin 30px 0
              font-size 20px
              color #000
            .li-cont
              display none
              font-size 14px
              color #000
            .actice
              display none
            img
              max-width 140px

          .li-one
            &:hover
              .li-title
                color #ff5e6b
              .li-cont
                display block
              .actice
                display block
              .no-actice
                display none
    .five-cont
      width 100%
      height 820px
      background-image url("../assets/img/product/1-3-BG.png")
      background-repeat no-repeat
      background-size cover
      background-position center
      .five-title
        font-weight bold
        text-align center
        padding-top 160px
        font-size 34px
        color #000
      .code
        position relative
        width 406px
        height 400px
        margin  120px auto 0
        .qr-code
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          .qrCodeBox
            display flex
            align-items center
            justify-content center
            width 140px
            height 140px
            margin 0 auto
            background-color #fff
  .product-mobile
    .banner-img
      position relative
      min-height 150px
      img
        width 100%
      .banner-ti
        width 100%
        .product-t
          text-align center
          width 70%
          position absolute
          left 50%
          top 35%
          transform translate(-50%,-50%)
          font-size 24px
          color #fff
        .product-c
          text-align center
          width 88%
          position absolute
          left 50%
          top 58%
          transform translate(-50%,-50%)
          font-size 12px
          line-height 1.5
          color #fff
        .download
          position absolute
          left 50%
          top 75%
          transform translate(-50%,-50%)
          width 120px
          height 30px
          border-radius 30px
          background rgba(255,255,255,0)
          border 1px solid #fff
          color #fff
          font-size 16px
          text-align center
          line-height 30px
    .two-box
      padding 30px 30px 0!important
      .message-cont
        margin-left 0!important
        margin-right 10px
        &.last-cont
          border-bottom none!important
    .four-box
      padding-bottom 30px!important
    .one-box
      display flex
      justify-content center
      padding 50px 30px 0
      .message-box
        width 120px
        img
          box-shadow: 2px 2px 6px rgba(0,0,0, .2);
          width 120px
      .message-cont
        margin-left 10px
        display flex
        flex-direction column
        align-items center
        border-bottom 1px solid #ddd
        .message-icon
          margin-top 20px
          width 40px
          img
            width 40px
        .message-ti
          font-weight bold
          margin 15px 0 10px
          color #000
          font-size 14px
        .message-ct
          text-align center
          color #000
          font-size 12px
    .cont-two
      padding-top 30px
      background #f6f9ff
      .first-img
        margin 30px auto 0
        width 315px
        img
          width 315px
    .genesis-box
      margin-top 50px
      display flex
      justify-content center
      align-items center
      margin-bottom 20px
      img
        width 115px
        margin-right 10px
      .stem
        font-weight bold
        font-size 16px
        color #000
    .three-main
      text-align center
      padding  0 30px
      color #000
      font-size 14px
    .mobile-ul
      margin-top 50px
      padding 0 30px
      display flex
      flex-wrap wrap
      .li-top
        margin-top 40px
        padding-bottom 50px
      .li-one
        width 47%
        display flex
        flex-direction column
        align-items center
        &:nth-child(odd)
          margin-right 6%
        .img-box
          width 70px
          img
            width 70px
        .li-title
          font-weight bold
          color #000
          font-size 16px
          margin 20px 0 15px
        .li-en
          margin 20px 0 30px
          @media (max-width: 320px){
            margin 20px 0 15px
          }
        .li-cont
          color #000
          font-size 12px
          line-height 1.5
  .download-box
    .download-img
      position relative
      min-height 150px
      img
        width 100%
      .five-title
        position absolute
        left 50%
        top 20%
        transform translate(-50%,-50%)
        font-size 18px
        color #000
        font-weight bold
      .code
        position absolute
        left 50%
        top 60%
        transform translate(-50%,-50%)
</style>
