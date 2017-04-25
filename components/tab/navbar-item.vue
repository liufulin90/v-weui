<template>
<div :class="{'weui-navbar__item': true, 'weui-bar__item_on': isSelected}"  @click="selectItem">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    key: {
      type: null,
      required: true
    },

    isSelected: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    selectItem() {
      this.$dispatch('weui-item-select', this.key);
    }
  }
}
</script>
