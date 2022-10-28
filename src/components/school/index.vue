<template>
  <div style="margin-top: 20px">
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
    show(){
      alert("🐵🐵收到！")
    }
  },
};
</script>

<style></style>
