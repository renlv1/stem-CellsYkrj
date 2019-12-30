<template>
  <div class="footer-warp">
    <div class="footer-con">
      <div class="footer">
        <div class="qr-code">
          <div class="code  bjnews">
            <div class="icon"></div>
            <div class="title">{{$t('common.text1')}}</div>
          </div>
          <div class="code pc-download">
            <div class="icon" id="qrCodeBox3"></div>
            <div class="title">{{$t('common.text2')}}</div>
          </div>
          <div class="code mobile-download">
            <div class="icon" id="qrCodeBox4"></div>
            <div class="title">{{$t('common.text2')}}</div>
          </div>
        </div>
        <div class="copyright">
          <div class="tit foot-name">{{$t('common.text3')}}</div>
          <div class="tit">{{$t('common.text4')}}：ogradygranadosk4@gmail.com</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '../assets/js/jquery.qrcode.min'
	export default {
		data() {
			return {
        appIos: '',
        appAnd: '',
        isAndroid: Boolean,
        isiOS: Boolean
      }
		},
    created() {
      var u = navigator.userAgent;
      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      this.getIos()
      this.getAnd()
      // let isScan = this.$route.query.sap
      // if (isScan) {
      //   if (this.isAndroid) {
      //     location.href = this.appAnd
      //   }
      //   if (this.isiOS) {
      //     location.href = this.appIos
      //   }
      // }
    },
    mounted () {
      $('#qrCodeBox3').html('')
      $('#qrCodeBox3').qrcode({
        render: 'canvas', //     table方式
        width: 70, //            宽度
        height: 70, //            高度
        text: window.location.href + '?sap=1' //      任意内容
      })
    },
    methods: {
      getIos() {
        this.$fetch.post('https://web.cellcytolog.com/user/version',{
          clientType:  1
        }).then(res => {
          if(res.status === "success") {
            this.appIos = res.data.appUrl
            let isScan = this.$route.query.sap
            if (isScan) {
                location.href = res.data.appUrl
            }
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
              let isScan = this.$route.query.sap
              if (isScan) {
                location.href = res.data.appUrl
              }
            this.showQrPopup()
          }
        })
      },
      showQrPopup() {
        $('#qrCodeBox4').html('')
        $('#qrCodeBox4').qrcode({
          render: 'canvas', //     table方式
          width: 40, //            宽度
          height: 40, //            高度
          text: `${window.location.href}?sao=1&appIos=${this.appIos}&appAnd=${this.appAnd}` //      任意内容
        })
      },
    }
	}
</script>

<style scoped lang="less">
  .footer-warp{
    width: 100%;
    height: 120px;
    line-height: 120px;
    background-color: #508cff;
    font-size: 12px;
    color: #fff;
    @media screen and (max-width: 1222px){
      width: 100%;
      height: auto;
    }
    .footer-con{
      width: 1222px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width: 1222px){
        width: 100%;
        display: block;
      }
      .footer{
        width: 1020px;
        height: 100%;
        margin-right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 1222px){
          width: 100%;
          height: auto;
          display: block;
          padding: 20px 0;
        }
        .qr-code{
          width: auto;
          margin-right: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          .en & {
            margin-right: 0;
            @media screen and (max-width: 768px) {
              display: block;
              height: auto;
            }
          }
          @media screen and (max-width: 1222px){
            width: 100%;
            height: 40px;
            margin-right: 0;
            margin-top: 10px;
            margin-bottom: 20px;
          }
          .code{
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 1222px){
              height: 100%;
            }
            .en &{
              @media screen and (max-width: 1222px){
                height: 50px;
              }
              @media screen and (max-width: 768px){
                line-height: 50px;
                margin-bottom: 20px;
              }
            }
            &:nth-child(1){
              .icon{
                background: url("../assets/img/about/bjnews-er.png") no-repeat center;
                background-size: contain;
              }
            }
            &:nth-child(2){
              .icon{
                background-color: #fff;
                position: relative;
                padding: 5px 0 5px 5px;
              }
            }
            .icon{
              width: 80px;
              height: 80px;
              border-radius: 6px;
              @media screen and (max-width: 1222px){
                width: 50px;
                height: 50px;
              }
            }
            .title{
              margin-left: 10px;
              .en &{
                width: 148px;
                @media screen and (max-width: 768px) {
                  height: 50px;
                }
              }
            }
            &:nth-child(1){
              margin-right: 48px;
              .en &{
                @media screen and (max-width: 768px) {
                  margin-right: 0;
                }
              }
            }
          }
          .pc-download{
            @media screen and (min-width: 1222px){
              display: flex;
            }
            @media screen and (max-width: 1222px){
              display: none
            }
          }
          .mobile-download{
            @media screen and (min-width: 1222px){
              display: none;
            }
            @media screen and (max-width: 1222px){
              display: flex;
              position: relative;
              padding: 5px 0 5px 5px;
              .icon{
                width: 50px;
                height: 50px;
                border-radius: 6px;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .title{
                margin-left: 10px;
                .en &{
                  width: 148px;
                  @media screen and (max-width: 768px) {
                    height: 50px;
                  }
                }
              }
            }
          }
        }
        .copyright{
          width: auto;
          .en &{
            width: auto;
            @media screen and (max-width: 1222px){
              width: 100%;
              margin: 0 auto;
            }
            @media screen and (max-width: 768px){
              padding: 0 20px;
            }
          }
          @media screen and (max-width: 1222px){
            text-align: center;
          }
          .tit{
            line-height: 14px;
            .en &{
              line-height: 1.2;
            }
            &:nth-child(1){
              margin-bottom: 10px;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
</style>

