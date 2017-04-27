<template>
<a :href="link || 'javascript:;'" :link="routerLink" class="weui-media-box" :class="typeClass" v-if="!!link || !!routerLink">
  <slot></slot>
</a>
<div class="weui-media-box" :class="typeClass" v-else>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'media-box',
  props: {
    /**
     * 列表类型，可以为：
     * appmsg：图文组合列表
     * text：文字组合列表
     * small-appmsg：小图文组合列表
     */
    type: {
      type: String,
      required: true
    },

    /**
     * 跳转链接
     */
    link: {
      type: String,
      required: false
    },

    /**
     * vue-router使用的跳转链接
     * 若使用vue-router，推荐使用router-link而非link
     */
    routerLink: {
      type: null,
      required: false
    }
  },

  computed: {
    typeClass() {
      return `weui-media-box_${this.type}`;
    }
  }
}
</script>
