<template>
  <div class="hello">
    <Student :student="student" />
    <School :msg="msg" />
  </div>
</template>

<script>
import "./hello.scss";
import School from "../../components/school";
import Student from "../../components/student";
export default {
  name: "HelloWorld",
  components: { School, Student },
  data() {
    return {
      msg: "浙江理工",
      student: "金哲羽",
    };
  },
  methods: {
    checkCode(val) {
      console.log(val);
    },
  },
};
</script>
