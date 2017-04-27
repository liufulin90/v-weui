<template>
<div class="weui-msg">
  <div class="weui-msg__icon-area" v-if="icon">
    <i :class="['weui-icon_msg', 'weui-icon-' + icon]"></i>
  </div>
  <div class="weui-msg__text-area">
    <h2 class="weui-msg__title" v-if="title">{{title}}</h2>
    <div class="weui-msg__desc"><slot name="content"></slot></div>
  </div>
  <div class="weui-msg__opr-area">
    <slot name="operation"></slot>
  </div>
  <div class="weui-msg__extra-area">
    <slot name="extra"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'message',
  props: {
    /**
     * 消息图标名称
     * 若设置，则会在最上方显示大图标
     */
    icon: {
      type: String,
      required: false
    },

    /**
     * 消息标题
     */
    title: {
      type: String,
      required: false
    }
  }
}
</script>
