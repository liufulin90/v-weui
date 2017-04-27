<template>
<div :class="{'weui-loading_toast': type === 'loading'}">
  <div class="weui-mask_transparent"></div>
  <div class="weui-toast">
    <div class="weui-loading" v-if="type === 'loading'">
      <div v-for="n in 12" class="weui-loading_leaf" :class="'weui-loading_leaf_' + n"></div>
    </div>
    <i class="weui-icon-toast" v-else></i>
    <div class="weui-toast__content"><slot></slot></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    /**
     * toast类型
     * icon: 包含图标的提示框（默认）
     * loading: 包含loading动画的提示框
     */
    type: {
      type: String,
      required: false,
      default: 'icon'
    }
  }
}
</script>
