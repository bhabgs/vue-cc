/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-13 15:05:26
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-13 15:09:07
 */
class Bus {
  constructor() {
    this.callbacks = {};
  }

  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }

  $emit(name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach((item) => {
        item(args);
      });
    }
  }
}

export default Bus;
