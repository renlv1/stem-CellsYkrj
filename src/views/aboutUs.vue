<template>
  <div class="wrap-about">
    <div class="about">
      <div class="banner">
        <div class="content">
          <div class="title-app"></div>
          <div class="and-tit">{{$t('aboutUs.text1app')}}</div>
          <div class="info-img">
            <div class="title"><img src="../assets/img/about/2-0-STEM-CELLS.svg" alt=""></div>
            <div class="tit pc-tit">{{$t('aboutUs.text1')}}</div>
            <div class="tit pc-tit">{{$t('aboutUs.text101')}}</div>
            <!--<div class="tit pc-tit" v-if="lang.toLowerCase() === 'en' && isPC">{{$t('aboutUs.text1app')}}</div>-->
            <!--<div class="and-tit pc-tit">{{$t('aboutUs.text1app')}}</div>-->
          </div>
        </div>
      </div>
      <div class="no-a wow fadeInLeft">
        <div class="content ">
          <div class="title"></div>
          <div class="text-p">{{$t('aboutUs.text2')}}</div>
          <div class="text-p">{{$t('aboutUs.text3')}}</div>
          <div class="list">
            <div class="li">
              <div class="li-img"></div>
              <div class="tit">{{$t('aboutUs.text6')}}</div>
            </div>
            <div class="li">
              <div class="li-img"></div>
              <div class="tit">{{$t('aboutUs.text7')}}</div>
            </div>
            <div class="li">
              <div class="li-img"></div>
              <div class="tit">{{$t('aboutUs.text8')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="no-b wow fadeInUp">
        <div class="content">
          <div class="title wow">{{$t('aboutUs.text9')}}</div>
          <div class="cness-list">
            <div class="li" v-for="(item,index) in $t('aboutUs.cnessDatas')" :key="index">
              <div class="info-con">
                <div class="tit">{{item.title}}</div>
                <div class="explain">{{item.text}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="no-c">
        <div class="content">
          <div class="button wow fadeInLeft">
            <div class="but ">
              <div class="info-box">
                <div class="tit">{{$t('aboutUs.text4')}}</div>
                <div class="emil" >ogradygranadosk4@gmail.com</div>
              </div>
            </div>
            <div class="but ">
              <div class="info-box">
                <div class="tit">{{$t('aboutUs.text5')}}</div>
                <div class="emil" >moosew2922@yopmail.com</div>
              </div>
            </div>
          </div>
          <div class="bjnews wow fadeInRight" :class="`${lang.toLowerCase()}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'
  export default {
    data() {
      return {
        isPC: window.innerWidth > 768,
        lang: window.localStorage.getItem('stemLang') || ''
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
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .wrap-about{
    width: 100%;
    .about{
      .banner{
        width: 100%;
        height: 900px;
        background: url("../assets/img/about/2-0-banner-BG.png") no-repeat center;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        @media screen and (max-width: 1024px){
          height: 853px;
        }
        @media screen and (max-width: 768px){
          width: 750px;
          height: 920px;
          margin: 0 auto;
          background: url("../assets/img/about/app/2-0-banner-BG.png") no-repeat center;
          background-size: contain;
        }
        @media screen and (max-width: 750px){
          width: 100vw;
          height: 122.66vw;
        }
        .content{
          width: 1200px;
          height: 711px;
          margin: 0 auto;
          @media screen and (max-width: 1200px){
            width: 100%;
            height: 59.25%;
            padding: 0 30px;
          }
          @media screen and (max-width: 768px){
            width: 100%;
            height: auto;
            padding: 0;
          }
          .title-app{
            @media screen and (min-width: 769px){
              display: none;
            }
            @media screen and (max-width: 768px){
              width: 139px;
              margin-left: 22px;
              height: 30px;
              background: url("../assets/img/about/app/2-0-STEM-CELLS.svg") no-repeat center;
              background-size: contain;
            }
            @media screen and (max-width: 750px){
              height: 20px;
              margin-top: 100px;
            }
          }
          .and-tit{
            font-size: 20px;
            color: #fff;
            margin-top: 30px;
            margin-bottom: 78px;
            padding-left: 22px;
            @media screen and (min-width: 769px) {
              display: none;
            }
            @media screen and (max-width: 750px) {
              margin-top: 20px;
              margin-bottom: 0;
            }
            @media screen and (max-width: 375px) {
              padding-left: 20px;
            }
          }
          .info-img{
            width: 100%;
            height: 100%;
            .pc-tit{
              @media screen and (max-width: 768px){
                display: none;
              }
            }
            .title{
              width: 230px;
              line-height: 30px;
              @media screen and (max-width: 768px){
                display: none;
              }
              img{
                display: block;
                width: 100%;
                height: 100%;
              }
              margin-bottom: 40px;
              @media screen and (max-width: 1024px){
                margin-left: 34px;
              }
              @media screen and (max-width: 768px){
                margin-left: 23px;
              }
              @media screen and (max-width: 414px){
                height: 20px;
                margin-left: -14px;
              }
            }
            .cn &{
              background: url("../assets/img/about/2-0-banner.png")no-repeat center;
              background-size: contain;
              @media screen and (max-width: 1024px) {
                background-size: contain;
              }
              @media screen and (max-width: 768px) {
                margin: 0 auto;
              }
            }
            .en &{
              background: url("../assets/img/about/2-0-banner-EN.png")no-repeat center;
              background-size: contain;
              @media screen and (max-width: 1024px) {
                background-size: contain;
              }
            }
            @media screen and (max-width: 768px) {
              width: 692px;
              height: 540px;
              margin: 0 auto;
              .cn &{
                background: url("../assets/img/about/app/2-0-banner.png")no-repeat center;
                background-size: contain;
              }
              .en &{
                background: url("../assets/img/about/app/2-0-banner-EN.png")no-repeat center;
                background-size: contain;
              }
            }
            @media screen and (max-width: 750px) {
              width: 100vw;
              height: 78.03vw;
            }
            .tit{
              width: 360px;
              font-size: 40px;
              color: #fff;
              .en &{
                width: 460px;
              }
              @media screen and (max-width: 1024px){
                width: 100%;
                padding-left: 34px;
                font-size: 24px;
              }
              @media screen and (max-width: 768px){
                padding-left: 20px;
                font-size: 20px;
                display: none;
                .en &{
                  width: 380px;
                }
              }
              @media screen and (max-width: 768px){
                padding-left: 34px;
                .cn &{
                  width: 100%;
                }
                .en &{
                  width: 100%;
                }
              }
            }
          }
        }
      }
      .no-a{
        width: 100%;
        padding-top: 186px;
        @media screen and (max-width: 768px) {
          padding-top: 94px;
        }
        .content{
          width: 1200px;
          margin: 0 auto;
          @media screen and (max-width: 1200px) {
            width: 100%;
            padding: 0 20px;
          }
          .title{
            width: 138px;
            height: 30px;
            background: url("../assets/img/about/2-1-STEM-CELLS.svg") no-repeat center;
            background-size: contain;
            margin: 0 auto 60px;
          }
          .text-p{
            width: 880px;
            line-height: 1.5;
            margin: 0 auto 40px;
            font-size: 16px;
            color: #333;
            @media screen and (max-width: 1200px) {
              width: 100%;
            }
          }
          .list{
            width: 880px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            padding: 40px 0 186px;
            @media screen and (max-width: 1200px) {
              width: 100%;
              padding: 0 0 93px;
            }
            .li{
              width: auto;
              &:nth-child(1){
                .li-img{
                  background: url("../assets/img/about/2-1-li01.svg") no-repeat center;
                  background-size: contain;
                }
              }
              &:nth-child(2){
                .li-img{
                  background: url("../assets/img/about/2-1-li02.svg") no-repeat center;
                  background-size: contain;
                }
              }
              &:nth-child(3){
                .li-img{
                  background: url("../assets/img/about/2-1-li03.svg") no-repeat center;
                  background-size: contain;
                }
              }
              &:nth-child(2){
                margin: 0 180px;
                @media screen and (max-width: 768px) {
                  margin: 0 20px;
                }
                @media screen and (max-width: 320px) {
                  margin: 0 10px;
                }
              }
              .li-img{
                width: 80px;
                height: 80px;
                margin: 0 auto;
                @media screen and (max-width: 768px) {
                  width: 50px;
                  height: 50px;
                  margin: 0 20px;
                }
                @media screen and (max-width: 320px) {
                  width: 30px;
                  height: 30px;
                }
              }
              .tit{
                font-size: 20px;
                color: #333;
                text-align: center;
                padding-top: 20px;
                @media screen and (max-width: 320px) {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
      .no-b{
        width: 100%;
        background-color: #f6f9ff;
        @media screen and(max-width: 768px){
          padding: 0 20px;
        }
        .content{
          width: 100%;
          padding: 114px 0 84px;
          @media screen and(max-width: 767px){
            padding: 50px 0 40px;
          }
          .title{
            width: 600px;
            height: 130px;
            background: url("../assets/img/about/2-2-STEM-CELLS.svg") no-repeat center;
            background-size: contain;
            margin: 0 auto;
            font-size: 34px;
            font-weight: 600;
            color: #000;
            text-align: center;
            line-height: 130px;
            @media screen and(max-width: 768px){
              width: 300px;
              height: 64px;
              line-height: 64px;
              font-size: 18px;
            }
          }
          .cness-list{
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-flow: wrap;
            padding-top: 100px;
            @media screen and (max-width: 1400px){
              justify-content: space-between;
              width: 768px;
              margin: 0 auto;
            }
            @media screen and (max-width: 768px){
              justify-content: center;
              width: 100%;
              margin: 0 auto;
              padding-top: 0;
            }
            .li{
              height: 374px;
              width: 264px;
              color: #000;
              display: flex;
              align-items: flex-start;
              padding-top: 22px;
              @media screen and (max-width: 768px){
                padding-top: 0;
              }
              @media screen and (max-width: 767px){
                width: 160px;
                padding-top: 0;
              }
              @media screen and (max-width: 320px){
                width: 48%;
              }
              @media screen and (max-width: 768px){
               margin-bottom: 40px;
              }
              @media screen and (max-width: 767px){
                margin-bottom: 0;
              }
              .info-con{
                padding-left: 26px;
                line-height: 1.5;
                @media screen and (max-width: 1400px){
                  .en{
                    padding-left: 26px;
                  }
                  .cn{
                    padding-left: 80px;
                  }
                }
                @media screen and (max-width: 768px){
                  .en & {
                    padding-left: 60px;
                  }
                  .cn & {
                    padding-left: 60px;
                  }
                }
                @media screen and (max-width: 767px){
                  .en & {
                    padding-left: 20px;
                  }
                  .cn & {
                    padding-left: 20px;
                  }
                }
                @media screen and (max-width: 375px){
                  .en & {
                    padding-left: 20px;
                  }
                  .cn & {
                    padding-left: 20px;
                  }
                }
                @media screen and (max-width: 320px){
                  .en & {
                    padding-left: 14px;
                  }
                  .cn & {
                    padding-left: 14px;
                  }
                }
                .tit{
                  font-size: 18px;
                  padding-bottom: 10px;
                  @media screen and (max-width: 768px){
                    font-weight: bold;
                  }
                  @media screen and (max-width: 767px){
                    font-size: 14px;
                  }
                  @media screen and (max-width: 320px){
                    .cn & {
                      line-height: 24px;
                    }
                    .en & {
                      line-height: 1.2;
                    }
                  }
                }
                .explain{
                  font-size: 14px;
                  @media screen and (max-width: 768px){
                    .cn & {
                      line-height: 28px;
                    }
                    .en & {
                      line-height: 1.5;
                    }
                  }
                  @media screen and (max-width: 320px){
                    .cn & {
                      line-height: 24px;
                    }
                    .en & {
                      line-height: 1.2;
                    }
                  }
                  @media screen and (max-width: 767px){
                    font-size: 12px;
                  }
                }
              }
              &:nth-child(1){
                background: url("../assets/img/about/2-2-cness-li01.svg") no-repeat center;
                background-size: contain;
                @media screen and (max-width: 768px){
                  background: url("../assets/img/about/app/2-2-li1-en.png") no-repeat center;
                  background-size: contain;
                  margin-right: 26%;
                  .info-con{
                    .cn &{
                      padding-top: 50px;
                    }
                    .en &{
                      padding-top: 40px;
                    }
                  }
                }
                @media screen and (max-width: 414px){
                  margin-right: 2%;
                }
                @media screen and (max-width: 375px){
                  margin-right: 4px;
                }
                @media screen and (max-width: 320px){
                  .info-con{
                    .cn &{
                      padding-top: 66px;
                    }
                    .en &{
                      padding-top: 66px;
                    }
                  }
                }
              }
              &:nth-child(2){
                background: url("../assets/img/about/2-2-cness-li02.svg") no-repeat center;
                background-size: contain;
                margin: 194px 50px 0;
                align-items: flex-end;
                padding-bottom: 50px;
                .info-con{
                  @media screen and (max-width: 1400px){
                    .en &{
                      padding-bottom: 40px;
                    }
                  }
                }
                @media screen and (max-width: 1400px){
                  margin: 0 50px 50px;
                  padding-bottom: 0;
                }
                @media screen and (max-width: 768px){
                  margin: 0;
                  background: url("../assets/img/about/app/2-2-li2-en.png") no-repeat center;
                  background-size: contain;
                  .info-con{
                    .cn &{
                      padding-bottom: 80px;
                    }
                    .en &{
                      padding-bottom: 50px;
                    }
                  }
                }
                @media screen and (max-width: 320px){
                  .info-con{
                    .cn &{
                      padding-bottom: 60px;
                    }
                    .en &{
                      padding-bottom: 60px;
                    }
                  }
                }
              }
              &:nth-child(3){
                background: url("../assets/img/about/2-2-cness-li03.svg") no-repeat center;
                background-size: contain;
                margin-right: 50px;
                @media screen and (max-width: 768px){
                  margin-right: 26%;
                  background: url("../assets/img/about/app/2-2-li3-en.png") no-repeat center;
                  background-size: contain;
                  .info-con{
                    .cn &{
                      padding-top: 50px;
                    }
                    .en &{
                      padding-top: 34px;
                    }
                  }
                }
                @media screen and (max-width: 414px){
                  margin-right: 2%;
                }
                @media screen and (max-width: 375px){
                  margin-right: 4px;
                }
                @media screen and (max-width: 320px){
                  .info-con{
                    padding-left: 14px;
                    .cn &{
                      padding-top: 65px;
                    }
                    .en &{
                      padding-top: 55px;
                    }
                  }
                }
              }
              &:nth-child(4){
                background: url("../assets/img/about/2-2-cness-li04.svg") no-repeat center;
                background-size: contain;
                margin-top: 194px;
                align-items: flex-end;
                padding-bottom: 50px;
                @media screen and (max-width: 1400px){
                  margin-top: 0;
                  .en &{
                    padding-bottom: 0;
                  }
                }
                .info-con{
                  @media screen and (max-width: 1400px){
                    .en &{
                      padding-bottom: 30px;
                    }
                  }
                }
                @media screen and (max-width: 768px){
                  padding-bottom: 0;
                  background: url("../assets/img/about/app/2-2-li4-en.png") no-repeat center;
                  background-size: contain;
                  .info-con{
                    .cn &{
                      padding-bottom: 80px;
                    }
                    .en &{
                      padding-bottom: 60px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .no-c{
        width: 100%;
        height: 920px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        @media screen and (max-width: 1300px){
          height: 600px;
          padding-bottom: 40px;
        }
        @media screen and (max-width: 1200px){
          height: auto;
          padding-bottom: 40px;
        }
        .content{
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          @media screen and (max-width: 1200px){
            display: block;
          }
          .button{
            flex: 1;
            .but{
              width: 360px;
              height: 100px;
              line-height: 100px;
              text-align: center;
              background: url("../assets/img/about/button-a.png") no-repeat center;
              background-size: cover;
              position: relative;
              overflow: hidden;
              //cursor: pointer;
              transition: all .3s linear;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 20px;
              box-shadow: 0 5px 5px rgba(0,0,0,.12);
              @media screen and (max-width: 1200px){
                margin: 50px auto 0;
              }
              @media screen and (max-width: 768px){
                width: 260px;
                height: 80px;
                background: url("../assets/img/about/app/but.png") no-repeat center;
                background-size: contain;
                border-radius: 17px;
              }
              &:hover {
               &:after{
                 content: '';
                 display: block;
                 width: 100%;
                 height: 100%;
                 border-radius: 16px;
                 position: absolute;
                 top: 0;
                 left: 0;
                 right: 0;
                 z-index: 2;
                 transition: all .3s linear;
                 background-color: rgba(0,0,0, .2);
               }
                .info-box{
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                  z-index: 999;
                  .emil{
                    text-decoration: underline !important;
                  }
                }
              }
              &:nth-child(1){
                margin-bottom: 40px;
              }
              .info-box{
                width: 100%;
                .tit{
                  font-size: 24px;
                  line-height: 24px;
                  @media screen and (max-width: 768px){
                    font-size: 18px;
                  }
                }
                .emil{
                  width: 100%;
                  font-size: 20px;
                  line-height: 30px;
                  display: block;
                  @media screen and (max-width: 768px){
                    font-size: 16px;
                  }
                }
              }
            }
          }
          .bjnews{
            width: 636px;
            height: 704px;
            margin-left: 226px;
            .en &{
              background: url("../assets/img/about/bjnews-en.png") no-repeat center;
              background-size: contain;
            }
            .cn &{
              background: url("../assets/img/about/bjnews.png") no-repeat center;
              background-size: contain;
            }
            @media screen and (max-width: 1300px) {
              width: 400px;
              height: 468px;
            }
            @media screen and (max-width: 1200px) {
              margin-left: 0;
            }
            @media screen and (max-width: 768px) {
              width: 260px;
              height: 328px;
              margin-bottom: 50px;
            }
          }
        }
      }
    }
  }
</style>
