<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-14 09:25:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-14 16:13:48
-->
<template>
  <aForm :model="model" :rules="rules" ref="form">
    <aItem title="用户名" prop="value">
      <aInput v-model="model.value" placeholder="用户名" />
    </aItem>
    <aItem title="密码" prop="password">
      <aInput :value.sync="model.password" placeholder="密码" type="password" />
    </aItem>

    <aItem>
      <button @click="onSubmit">提交</button>
    </aItem>
  </aForm>
</template>
<script>
import aInput from '@/components/form/input.vue';
import aItem from '@/components/form/item.vue';
import aForm from '@/components/form/form.vue';

export default {
  data() {
    return {
      model: {
        value: '',
        password: '',
      },
      rules: {
        value: [{ type: 'string', required: true }],
        password: [{ type: 'string', required: true }],
      },
    };
  },
  components: {
    aInput,
    aItem,
    aForm,
  },
  methods: {
    onSubmit() {
      this.$refs.form.validator((e) => {
        console.log(e);
      });
    },
  },
};
</script>
