<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-13 14:16:47
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-13 14:21:21
-->
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: 'props',
    },
  },
  created() {
    console.log(this.$attrs.foo);
  },
};
</script>
