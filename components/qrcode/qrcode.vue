<template>
  <img :style="{height: size + 'px', width: size + 'px'}" :src="getImgUrl()">
</template>

<script>
  import QrCode from './qr.es6'
  export default {
    name: 'qrcode',
    props: {
      val: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 100
      },
      // 'L', 'M', 'Q', 'H'
      level: String,
      bgColor: {
        type: String,
        default: '#FFFFFF'
      },
      fgColor: {
        type: String,
        default: '#000000'
      },
      margin: {
        type: Number,
        default: 2
      }
    },
    methods: {
      getImgUrl () {
        let options = {
          modulesize: Math.min(Math.sqrt(this.size) / 2, 10),
          margin: this.margin,
          bgColor: this.bgColor,
          fgColor: this.fgColor
        }
        return QrCode().toImg(this.val, options)
      }
    }
  }
</script>
