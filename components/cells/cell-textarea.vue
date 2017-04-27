<template>
<textarea class="weui-textarea" v-model="value"></textarea>
</template>

<script>
export default {
  name: 'cell-textarea',
  props: {
    value: {
      type: String,
      required: true,
      twoWay: true
    }
  }
}
</script>
