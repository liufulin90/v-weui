<template>
  <div class="actionsheet_wrap">
    <div class="weui-mask_transparent" :class="{'weui-fade_toggle': show}" :style="{display: show ? 'block' : 'none'}" @click="hideActionSheet"></div>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-for="(key, text) in menus" @click="dispatchEvent('weui-menu-click', key)">
          {{text}}
        </div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" v-for="(key, text) in actions" @click="dispatchEvent('weui-action-click', key)">
          {{text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 双向绑定的数据，用于控制是否显示Actionsheet
     */
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    },

    /**
     * 菜单键值对
     */
    menus: {
      type: Object,
      required: false,
      default: {}
    },

    /**
     * 操作项键值对
     */
    actions: {
      type: Object,
      required: false,
      default: {}
    }
  },

  methods: {
    dispatchEvent(event, message) {
      this.$dispatch(event, message);
      if (event === 'weui-action-click') {
        this.hideActionSheet();
      }
    },

    hideActionSheet() {
      this.show = false;
    }
  }
}
</script>
