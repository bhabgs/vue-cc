<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-13 14:14:31
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-13 14:50:36
-->
<template>
  <div @click="emitchange">emit, {{ parentVal }}</div>
</template>

<script>
export default {
  inject: ['parentVal'],
  methods: {
    emitchange() {
      this.$emit('ch', 'emit-change');
    },
  },
};
</script>
>
