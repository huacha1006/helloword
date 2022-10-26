<template>
  <div class="contain">
    <el-button @click="handleAle">测试</el-button>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    handleAle() {
      this.throttle(this.submit)();
    },
    submit() {
      console.log("提交");
    },
    throttle(fun) {
      let timer = null;
      return function () {
        fun();
        if (!timer) {
          timer = setTimeout(function () {
            timer = null;
          }, 1000);
        }
      };
    },
  },
};
</script>

<style lang="scss"></style>
