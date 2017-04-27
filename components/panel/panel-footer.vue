<template>
<a class="weui-panel__ft" :href="link || 'javascript:;'" :link="routerLink"><slot></slot></a>
</template>

<script>
export default {
  name: 'panel-footer',
  props: {
    /**
     * 底部跳转链接
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
  }
}
</script>
