<template>
<input class="weui-input" v-model="value">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      twoWay: true
    }
  }
}
</script>
