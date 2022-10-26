<template>
  <div class="contain">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
    <el-button @click="handleAle">测试</el-button>
    <button>1</button>
    <button>22</button>
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
      console.log('更改')
    },
    submit() {
      console.log("提交");
    },
  },
};
</script>

<style lang="scss"></style>
