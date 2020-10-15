<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-14 09:15:02
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-14 16:14:30
-->
<template>
  <div class="form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      default() {
        return {};
      },
      type: Object,
    },
    rules: {
      default() {
        return {};
      },
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    async validator(callBack) {
      const promiseAll = this.$children
        .filter((item) => item.prop)
        .map((item) => {
          return item.validator();
        });

      Promise.all(promiseAll)
        .then(() => callBack(true))
        .catch(() => callBack(false));
    },
  },
};
</script>
