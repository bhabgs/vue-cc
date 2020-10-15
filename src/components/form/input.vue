<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-14 09:15:02
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-14 14:06:24
-->
<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    onInput(e) {
      const val = e.target.value;
      this.$emit('input', val);
      this.$emit('update:value', val);
      this.$parent.$emit('validator', val);
    },
  },
};
</script>
