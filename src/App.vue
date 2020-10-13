<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-13 14:05:19
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-13 15:28:50
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <arrtCom />
    <propsCom msg="Welcome to Your Vue.js App" foo="zx" />
    <refCom ref="refcom" />
    <emitCom @ch="emitChange" />
    <slotCom>
      <template v-slot:title>
        我是title
      </template>

      <template v-slot:os="{ propsName }"> os {{ propsName }} </template>
    </slotCom>
  </div>
</template>

<script>
import arrtCom from '@/components/attrs.component.vue';
import propsCom from '@/components/props.component.vue';
import refCom from '@/components/ref.component.vue';
import emitCom from '@/components/emit.component.vue';
import slotCom from '@/components/slot/index.vue';
export default {
  name: 'App',
  provide() {
    return {
      parentVal: 'xxxxxxparentVal',
    };
  },
  components: {
    arrtCom,
    propsCom,
    refCom,
    emitCom,
    slotCom,
  },
  methods: {
    emitChange(e) {
      console.log(e);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.refcom.$data.msg = 'zxzxzxz';
    }, 2000);

    // $children
    console.log(this.$children[0]);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
