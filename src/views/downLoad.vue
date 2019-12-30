<template>
  <div class="download-wrap">
    <div class="wrapper-pc">
      <div class="about">
        <div class="banner">
          <div class="content">
            <div class="title" ><img src="../assets/img/APP-download/3-GENESIS.svg"></div>
            <div class="info-img" >
              <div class="tit">{{$t('download.text1')}}</div>
            </div>
            <div class="down-box">
              <div class="ios-box common-box" :class="{iosActive:  iosShow}" @mouseover="androidMouse(1)" >
                <div class="ios-img"><img src="../assets/img/APP-download/3-iOS.svg"></div>
                <div class="ios-title">{{$t('download.text2')}}</div>
                <div class="ios-code code-one" id="code-f">
                  <div class="ios-cont">
                    <img src="../assets/img/APP-download/qr-code.svg">
                    <div class="qr-code ">
                      <div class="qrCodeBox" id="qrCodeBox"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="android-box common-box" @mouseover="androidMouse(2)" :class="{andActive: andShow}" @mouseleave="andLeave(2)">
                <div class="ios-img"><img src="../assets/img/APP-download/Android.svg"></div>
                <div class="ios-title">{{$t('download.text3')}}</div>
                <div class="ios-code code-two">
                  <div class="ios-cont">
                    <img src="../assets/img/APP-download/qr-code.svg">
                    <div class="qr-code " >
                      <div class="qrCodeBox" id="qrCodeBox2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-mobile">
      <div class="banner-moblie"><img src="../assets/img/mobile-download/banner.png"></div>
      <div class="one-first">
        <div class="one-img"><img src="../assets/img/mobile-download/3-GENESIS.svg"></div>
        <div class="tit">{{$t('download.text1')}}</div>
      </div>
      <div class="down-box" >
        <a class="ios-box"   :href="appUrl2" target="_blank" v-if="isiOS">
          <div class="ios-img"><img src="../assets/img/mobile-download/3-iOS.svg"></div>
          <div class="ios-title">
            <div class="bg">
              <div class="down-t">{{$t('download.text2')}}</div>
            </div>
          </div>
        </a>
        <a class="android-box"  :href="appUrl2" target="_blank" v-if="isAndroid">
          <div class="ios-img"><img src="../assets/img/APP-download/Android.svg"></div>
          <div class="ios-title">
            <div class="bg">
              <div class="down-t">{{$t('download.text3')}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../assets/js/jquery.qrcode.min'
  export default {
    // components: { vHeader: resolve => require(['@/components/header.vue'], resolve),
    // },
    name: "downLoad",
    data() {
      return{
        andShow: false,
        iosShow: true,
        logo: require('../assets/img/APP-download/3-LOGO.svg'),
        isAndroid: Boolean,
        isiOS: Boolean,
        appUrl2: '',
        appUrlios: '',
        appUrland: '',
      }
    },
    created() {
      var u = navigator.userAgent;
      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      this.getCode()
      this.getCode1()
      this.getCode4()
    },
    methods: {
      androidMouse(index) {
        if(index === 1) {
          this.iosShow = true
          this.andShow = false
        } else {
          this.iosShow = false
          this.andShow = true
        }
      },
      andLeave(index) {
        if(index === 1) {
          this.iosShow = false
        } else {
          this.andShow = false
          this.iosShow = true
        }
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
            this.appUrl2 = res.data.appUrl
          }
        })
      },
      getCode1() {
        this.$fetch.post('https://web.cellcytolog.com/user/version',{
          clientType:  1
        }).then(res => {
          if(res.status === "success") {
            this.appUrlios = res.data.appUrl
            this.showQrPopup1()
          }
        })
      },
      getCode4() {
        this.$fetch.post('https://web.cellcytolog.com/user/version',{
          clientType:  4
        }).then(res => {
          if(res.status === "success") {
            this.appUrland = res.data.appUrl
            this.showQrPopup2()
          }
        })
      },
      showQrPopup1() {
        let downloadUrl
        downloadUrl = this.$utf16to8(this.appUrlios)
        $('#qrCodeBox').qrcode({
          render: 'canvas', //     table方式
          width: 140, //            宽度
          height: 140, //            高度
          text: downloadUrl //      任意内容
        })
      },
      showQrPopup2() {
        let downloadUrl2
        downloadUrl2 = this.$utf16to8(this.appUrland)
        $('#qrCodeBox2').qrcode({
          render: 'canvas', //     table方式
          width: 140, //            宽度
          height: 140, //            高度
          text: downloadUrl2 //      任意内容
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper-pc{
    height 100vh
    width: 100%;
    .about{
      width 1300px
      margin  0 auto
      @media (max-width: 1300px) {
        width 100%
      }
      .banner{
        margin 0  225px
        width: 1230px;
        height: 781px;
        background: url("../assets/img/APP-download/app-banner.png") no-repeat center;
        background-size: cover;
        @media (max-width: 1650px) {
          width 100%
          margin 0  10%
        }
        @media (max-width: 1500px) {
          width 100%
          margin 0 auto
        }
        .content{
          width: 1200px;
          margin: 0 auto;
          padding-top: 280px;
          @media (max-width: 1200px) {
            width 100%
          }
          .title{
            margin-left -220px
            @media (max-width: 1500px) {
              margin-left:10px
            }
          }
          .title-en{
            margin-left -320px
            @media (max-width: 1500px) {
              margin-left:10px
            }
          }
          .info-img{
            width 500px
            white-space wrap
            margin-top 28px
            margin-left -220px
            font-size 40px
            color #000
            @media (max-width: 1500px) {
              margin-left:  10px
              font-size 28px
              width 300px
            }
          }
          .info-en{
            margin-top 28px
            margin-left -320px
            font-size 40px
            color #000
            @media (max-width: 1580px) {
              margin-left:  -100px
              font-size 28px
            }
            @media (max-width: 1430px) {
              margin-left:  10px
              font-size 28px
            }
          }
          .common-box{
            cursor pointer
          }
          .down-box{
            margin-top 80px
            margin-left -220px
            display flex
            @media (max-width: 1500px) {
              margin-left: 10px
            }
            .ios-code{
              .ios-cont{
                position relative
                .qr-code{
                  position absolute
                  top 50%
                  left 50%
                  transform translate(-50%,-50%)
                }
                .qrCodeBox{
                  display flex
                  align-items center
                  justify-content center
                  width 140px
                  height 140px
                  margin 0 auto
                  background-color #fff
                }
              }
            }
            .ios-box, .android-box{
              width 200px
              display flex
              flex-direction column
              align-items center
              &.iosActive{
                .code-one{
                  display block
                }
              }
              &.andActive{
                .code-two{
                  display block
                }
              }
              .ios-title{
                margin 20px 0
                font-size 20px
                color #000
              }
              .ios-code{
                display none
              }
            }
            .android-box{
              margin-left 20px
            }
          }
        }
      }
    }
  }
  .wrapper-mobile{
    .banner-moblie{
      width 751px
      margin 0 auto
      position relative
      min-height 150px
      @media (max-width: 751px) {
        width 100%
      }
      img{
        width 100%
      }
    }
    .one-first{
      display flex
      flex-direction column
      align-items center
      .one-img{
        margin 63px 0 13px
        img{
          width 115px
        }
      }
      .tit{
        font-size 16px
      }
    }
    .down-box{
      margin 30px 0 60px
      display flex
      justify-content center
      .ios-box{
        /*margin-right 30px*/
      }
      .ios-box,.android-box{
        display flex
        flex-direction column
        align-items center
        .ios-img{
          img{
            width 20px
          }
        }
        .ios-title{
          margin-top 10px
          .bg{
            text-align center
            line-height 40px
            width 130px
            height 40px
            background url("../assets/img/mobile-download/button.png") no-repeat center;
            background-size: cover;
            position relative
            .down-t{
              color #fff
              font-size 14px
            }
          }
        }
      }
    }
  }
</style>
