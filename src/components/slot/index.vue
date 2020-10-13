<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-13 15:21:06
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-13 15:25:23
-->
<template>
  <div>
    <slot name="title"></slot>
    <slot name="os" :propsName="propsName"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      propsName: 'propsName',
    };
  },
};
</script>
>
