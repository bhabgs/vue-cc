<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-14 09:15:09
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-14 16:10:01
-->
<template>
  <div class="form-item">
    <label for="">
      {{ title }}
    </label>
    <slot></slot>
    <p class="error" v-show="error" style="color:red;">
      {{ error }}
    </p>
  </div>
</template>

<script>
import Schema from 'async-validator';

export default {
  inject: ['form'],
  props: {
    title: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      error: '',
    };
  },
  mounted() {
    this.$on('validator', (e) => {
      this.validator(e);
    });
  },
  methods: {
    validator() {
      const rule = this.form.rules[this.prop];
      const val = this.form.model[this.prop];
      const schema = new Schema({ [this.prop]: rule });

      return schema.validate({ [this.prop]: val }, (error) => {
        if (error) {
          this.error = error[0].message;
        } else {
          this.error = '';
        }
      });
    },
  },
};
</script>
