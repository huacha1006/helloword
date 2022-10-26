<template>
  <div style="margin-top: 20px">
    <span> hello </span>
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
