<template>
  <div>
    dev进行了开发项目
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      value: "",
    };
  },

  methods: {
    show() {
      alert("🐵🐵收到！");
    },
  },
};
</script>

<style></style>
