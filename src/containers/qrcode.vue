<template>
<div class="page button">
  <div class="hd">
    <h1 class="page_title">qrcode</h1>
  </div>
  <div class="bd spacing">

    <div style="text-align: center">
      <qrcode :val="val" :size="size" :bg-color="bgColor" :fg-color="fgColor" level="L"></qrcode>
    </div>
    <ul class="lists">
      <li>
        <label>size(px)</label>
        <input type="number" v-model="size">
      </li>
      <li>
        <label>bg-color</label>
        <input type="color" v-model="bgColor">
      </li>
      <li>
        <label>fg-color</label>
        <input type="color" v-model="fgColor">
      </li>
      <li>
        <label>val</label>
        <textarea rows="6" cols="80" v-model="val"></textarea>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {Qrcode} from 'v-weui';

export default {
  components: {
    'qrcode': Qrcode
  },
  data () {
    return {
      val: 'https://github.com',
      bgColor: '#FFFFFF',
      fgColor: '#000000',
      size: 200
    }
  },
  filters: {
    toNumber: {
      read (val) {
        return Number(val)
      },
      write (val) {
        return Number(val)
      }
    }
  }
};
</script>

<style>
  #wrapper{
    width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  header{
    font-size: 20px;
  }

  .lists{
    padding: 0;
    text-align: left;
    list-style: none;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .lists li{
    margin-bottom: 8px;
  }

  .lists label{
    display: block;
    margin-bottom: 5px;
  }

  .lists textarea{
    width: 100%;
  }
</style>
