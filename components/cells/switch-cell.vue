<template>
<div class="weui-cell weui-cell_switch">
  <cell-body>{{label}}</cell-body>
  <cell-footer>
    <input type="checkbox" :id="id" :name="name" class="weui-switch" v-model="on">
  </cell-footer>
</div>
</template>

<script>
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';

export default {
  name: 'switch-cell',
  props: {
    /**
     * checkbox input的id
     */
    id: {
      type: String,
      required: false
    },

    /**
     * checkbox input的name
     */
    name: {
      type: String,
      required: false
    },

    /**
     * checkbox input的value
     */
    value: {
      type: String,
      required: false
    },

    /**
     * 显示的文本内容
     */
    label: {
      type: String,
      required: true
    },

    /**
     * 开关本质上是checkbox，所以此项代表选中项
     * 用于checkbox input的v-model
     */
    on: {
      type: null,
      required: true,
      twoWay: true
    }
  },

  components: {
    CellBody,
    CellFooter
  }
}
</script>
